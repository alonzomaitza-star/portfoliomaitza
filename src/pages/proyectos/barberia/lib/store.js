/**
 * BarberShop State Engine
 * Manages appointments, shop config, and availability via localStorage.
 */

const STORAGE_KEYS = {
    CONFIG: 'barbershop_config',
    APPOINTMENTS: 'barbershop_appointments',
};

// ── Default Config ──
const DEFAULT_CONFIG = {
    isOpen: true,
    openTime: '09:00',
    closeTime: '20:00',
    slotDurationMin: 30, // base slot in minutes
};

// ── Services Catalog ──
export const SERVICES = [
    { id: 'corte', name: 'Corte Clásico', price: 150, duration: 30, icon: '✂️' },
    { id: 'barba', name: 'Barba', price: 100, duration: 20, icon: '🪒' },
    { id: 'combo', name: 'Corte + Barba', price: 250, duration: 50, icon: '💈' },
    { id: 'tratamiento', name: 'Tratamiento Capilar', price: 200, duration: 40, icon: '🧴' },
    { id: 'color', name: 'Color & Tinte', price: 350, duration: 60, icon: '🎨' },
    { id: 'vip', name: 'VIP Total', price: 450, duration: 90, icon: '👑' },
];

// ── Helpers ──
function getToday() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function timeToMinutes(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
}

function minutesToTime(m) {
    return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// ── Config ──
export function getConfig() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.CONFIG);
        return raw ? { ...DEFAULT_CONFIG, ...JSON.parse(raw) } : { ...DEFAULT_CONFIG };
    } catch {
        return { ...DEFAULT_CONFIG };
    }
}

export function saveConfig(config) {
    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));
}

export function toggleOpen(isOpen) {
    const config = getConfig();
    config.isOpen = isOpen;
    saveConfig(config);
    return config;
}

export function setHours(openTime, closeTime) {
    const config = getConfig();
    config.openTime = openTime;
    config.closeTime = closeTime;
    saveConfig(config);
    return config;
}

// ── Appointments ──
function getAllAppointments() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveAllAppointments(appts) {
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appts));
}

export function getTodayAppointments() {
    const today = getToday();
    return getAllAppointments().filter(a => a.date === today);
}

export function getAppointmentsByPhone(phone) {
    const normalized = phone.replace(/\D/g, '');
    return getAllAppointments()
        .filter(a => a.phone.replace(/\D/g, '') === normalized)
        .sort((a, b) => {
            const da = `${a.date} ${a.time}`;
            const db = `${b.date} ${b.time}`;
            return db.localeCompare(da);
        });
}

export function createAppointment({ phone, serviceId, time, referencePhoto = null }) {
    const service = SERVICES.find(s => s.id === serviceId);
    if (!service) throw new Error('Servicio no encontrado');

    const config = getConfig();
    if (!config.isOpen) throw new Error('La barbería está cerrada');

    const today = getToday();
    const todayAppts = getTodayAppointments();

    // Check for time collision
    const requestedStart = timeToMinutes(time);
    const requestedEnd = requestedStart + service.duration;

    const hasCollision = todayAppts.some(a => {
        if (a.status === 'cancelada' || a.status === 'no_asistio') return false;
        const s = SERVICES.find(sv => sv.id === a.serviceId);
        if (!s) return false;
        const aStart = timeToMinutes(a.time);
        const aEnd = aStart + s.duration;
        return requestedStart < aEnd && requestedEnd > aStart;
    });

    if (hasCollision) throw new Error('Ese horario ya está ocupado');

    const appointment = {
        id: generateId(),
        phone: phone.replace(/\D/g, ''),
        serviceId,
        serviceName: service.name,
        date: today,
        time,
        duration: service.duration,
        price: service.price,
        status: 'confirmada', // confirmada | en_proceso | finalizada | cancelada | no_asistio
        referencePhoto,
        createdAt: new Date().toISOString(),
    };

    const all = getAllAppointments();
    all.push(appointment);
    saveAllAppointments(all);

    return appointment;
}

export function updateAppointmentStatus(appointmentId, newStatus) {
    const all = getAllAppointments();
    const idx = all.findIndex(a => a.id === appointmentId);
    if (idx === -1) throw new Error('Cita no encontrada');
    all[idx].status = newStatus;
    saveAllAppointments(all);
    return all[idx];
}

// ── Availability ──
export function getAvailableSlots(serviceId) {
    const service = SERVICES.find(s => s.id === serviceId);
    if (!service) return [];

    const config = getConfig();
    if (!config.isOpen) return [];

    const todayAppts = getTodayAppointments().filter(
        a => a.status !== 'cancelada' && a.status !== 'no_asistio'
    );

    const openMin = timeToMinutes(config.openTime);
    const closeMin = timeToMinutes(config.closeTime);
    const now = new Date();
    const currentMin = now.getHours() * 60 + now.getMinutes();

    const slots = [];

    for (let t = openMin; t + service.duration <= closeMin; t += 30) {
        const slotEnd = t + service.duration;

        // Skip past slots
        if (t < currentMin) continue;

        // Check collisions
        const busy = todayAppts.some(a => {
            const s = SERVICES.find(sv => sv.id === a.serviceId);
            if (!s) return false;
            const aStart = timeToMinutes(a.time);
            const aEnd = aStart + s.duration;
            return t < aEnd && slotEnd > aStart;
        });

        slots.push({
            time: minutesToTime(t),
            available: !busy,
        });
    }

    return slots;
}

// ── Status helpers ──
export const STATUS_LABELS = {
    confirmada: 'Confirmada',
    en_proceso: 'En Proceso',
    finalizada: 'Finalizada',
    cancelada: 'Cancelada',
    no_asistio: 'No Asistió',
};

export const STATUS_COLORS = {
    confirmada: 'green',
    en_proceso: 'amber',
    finalizada: 'blue',
    cancelada: 'red',
    no_asistio: 'red',
};

export function getEstimatedWait(appointment) {
    if (appointment.status !== 'confirmada') return null;
    const now = new Date();
    const [h, m] = appointment.time.split(':').map(Number);
    const apptMin = h * 60 + m;
    const currentMin = now.getHours() * 60 + now.getMinutes();
    const diff = apptMin - currentMin;
    return diff > 0 ? diff : 0;
}

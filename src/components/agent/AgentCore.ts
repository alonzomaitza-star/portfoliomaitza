export type MessageType = "user" | "agent" | "system";

export interface Message {
    id: string;
    type: MessageType;
    content: string; // HTML supported
    timestamp: number;
    action?: string; // Optional clickable action
}

export interface AgentState {
    isOpen: boolean;
    isTyping: boolean;
    messages: Message[];
    userName?: string;
    context: Record<string, any>;
}

class AgentCore extends EventTarget {
    private state: AgentState = {
        isOpen: false,
        isTyping: false,
        messages: [],
        context: {},
    };

    private static instance: AgentCore;

    private constructor() {
        super();
        this.loadFromStorage();
    }

    static getInstance(): AgentCore {
        if (!AgentCore.instance) {
            AgentCore.instance = new AgentCore();
        }
        return AgentCore.instance;
    }

    // --- State Management ---

    getState() {
        return { ...this.state };
    }

    toggleChat(force?: boolean) {
        this.state.isOpen = force !== undefined ? force : !this.state.isOpen;
        this.emitChange();
        if (this.state.isOpen && this.state.messages.length === 0) {
            this.initConversation();
        }
    }

    setTyping(typing: boolean) {
        this.state.isTyping = typing;
        this.emitChange();
    }

    // --- Messaging ---

    addMessage(type: MessageType, content: string, action?: string) {
        const msg: Message = {
            id: crypto.randomUUID(),
            type,
            content,
            timestamp: Date.now(),
            action,
        };

        this.state.messages = [...this.state.messages, msg];
        this.saveToStorage();
        this.emitChange();
        return msg;
    }

    async processUserMessage(text: string) {
        this.addMessage("user", text);
        this.setTyping(true);

        // Simulate think time (fake AI delay)
        await new Promise((r) => setTimeout(r, 800 + Math.random() * 500));

        // Simple Command Parser (Phase 1 Logic)
        await this.handleCommand(text.toLowerCase());

        this.setTyping(false);
    }

    private async handleCommand(text: string) {
        // 1. Navigation Commands
        if (text.includes("ir a") || text.includes("navegar")) {
            if (text.includes("contacto")) {
                this.addMessage("agent", "Te llevo a la sección de contacto. 🚀");
                this.emitAction("navigate", "#contact");
                return;
            }
            if (text.includes("tienda") || text.includes("shop")) {
                this.addMessage("agent", "Abriendo la tienda... 🛍️");
                this.emitAction("navigate", "/shop");
                return;
            }
        }

        // 2. Identity
        if (!this.state.userName && (text.includes("me llamo") || text.includes("soy"))) {
            const name = text.replace(/.*(me llamo|soy)\s+/, "").trim();
            this.state.userName = name;
            this.state.context.hasGreeted = true;
            this.addMessage("agent", `¡Mucho gusto, **${name}**! ¿En qué puedo ayudarte hoy?`);
            this.saveToStorage();
            return;
        }

        // 3. Fallback / Default
        const defaultResponses = [
            "Interesante... cuéntame más.",
            "Entiendo. ¿Buscas algún servicio en específico?",
            "Puedo ayudarte a navegar por el sitio, solo dime a dónde ir.",
            "Estoy aquí para asistirte con nuestras herramientas de IA.",
        ];
        const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        this.addMessage("agent", randomResponse);
    }

    private initConversation() {
        if (this.state.messages.length > 0) return;

        setTimeout(() => {
            this.setTyping(true);
            setTimeout(() => {
                this.setTyping(false);
                if (this.state.userName) {
                    this.addMessage("agent", `¡Hola de nuevo, ${this.state.userName}! 👋`);
                } else {
                    this.addMessage("agent", "¡Hola! Soy **Insano AI**. 🤖<br>¿Cómo te llamas?");
                }
            }, 1000);
        }, 500);
    }

    // --- Events & Storage ---

    private emitChange() {
        this.dispatchEvent(new CustomEvent("state-change", { detail: this.state }));
    }

    private emitAction(action: string, data: any) {
        this.dispatchEvent(new CustomEvent("agent-action", { detail: { action, data } }));
    }

    private saveToStorage() {
        if (typeof sessionStorage !== "undefined") {
            sessionStorage.setItem("insano-agent-state", JSON.stringify({
                messages: this.state.messages,
                userName: this.state.userName,
                context: this.state.context
            }));
        }
    }

    private loadFromStorage() {
        if (typeof sessionStorage !== "undefined") {
            try {
                const stored = sessionStorage.getItem("insano-agent-state");
                if (stored) {
                    const parsed = JSON.parse(stored);
                    this.state.messages = parsed.messages || [];
                    this.state.userName = parsed.userName;
                    this.state.context = parsed.context || {};
                }
            } catch (e) {
                console.error("Failed to load agent state", e);
            }
        }
    }
}

export const agent = AgentCore.getInstance();

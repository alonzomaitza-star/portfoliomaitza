import type { APIRoute } from "astro";

const ADMIN_EMAIL_ALLOWLIST = [
  "dev@insano.work",
  "fernando.juarez.mtz.contacto@gmail.com",
];

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const email = (url.searchParams.get("email") || "").trim().toLowerCase();

  const allowed =
    email.length > 0 &&
    ADMIN_EMAIL_ALLOWLIST.map((e) => e.toLowerCase()).includes(email);

  return new Response(JSON.stringify({ allowed }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};

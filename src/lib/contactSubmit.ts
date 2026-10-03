/**
 * Client-safe submit for the contact form.
 *
 * The site is fully static right now: nothing here talks to a server.
 * When an email API is chosen (e.g. Web3Forms, EmailJS, Mailgun proxy),
 * replace the body of `submitContactMessage` with a fetch call —
 * the form component in src/routes/index.tsx does not need to change.
 */

export type ContactPayload = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export function validateContact(payload: ContactPayload): string | null {
  if (!payload.name.trim()) return "Podaj imię.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) return "Podaj poprawny e-mail.";
  if (!payload.message.trim()) return "Napisz wiadomość.";
  return null;
}

export async function submitContactMessage(payload: ContactPayload): Promise<{ ok: boolean }> {
  const error = validateContact(payload);
  if (error) return { ok: false };

  // TODO: podłącz wybraną usługę wysyłki maili (fetch do jej API).
  // Na razie wysyłka jest symulowana — strona działa w całości statycznie.
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true };
}

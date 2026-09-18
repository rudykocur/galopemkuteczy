import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  topic: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1).max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) return { ok: false, reason: "config" as const };

    const { sendLovableEmail } = await import("@lovable.dev/email-js");

    const escape = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const subject = `Nowe zapytanie ze strony — ${data.name}${data.topic ? ` (${data.topic})` : ""}`;
    const html = `
      <h2>Nowe zapytanie ze strony „Galopem ku tęczy"</h2>
      <p><strong>Imię:</strong> ${escape(data.name)}</p>
      <p><strong>E-mail:</strong> ${escape(data.email)}</p>
      ${data.topic ? `<p><strong>Temat:</strong> ${escape(data.topic)}</p>` : ""}
      <p><strong>Wiadomość:</strong></p>
      <p>${escape(data.message).replace(/\n/g, "<br>")}</p>
    `;
    const text = [
      `Imię: ${data.name}`,
      `E-mail: ${data.email}`,
      data.topic ? `Temat: ${data.topic}` : "",
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await sendLovableEmail(
        {
          to: "mrokasaifam@gmail.com",
          // Nadawca — podmień na adres w swojej domenie po jej skonfigurowaniu.
          from: "Galopem ku tęczy <kontakt@galopemkuteczy.pl>",
          subject,
          html,
          text,
          reply_to: data.email,
          purpose: "transactional",
          idempotency_key: `contact-${Date.now()}-${Math.random().toString(36).slice(2)}`,
          label: "contact-form",
        },
        { apiKey },
      );
      return { ok: res.success === true };
    } catch (err) {
      console.error("[contact-form] send failed:", err);
      return { ok: false, reason: "send_failed" as const };
    }
  });

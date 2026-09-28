"use server"

export type ContactState = {
  ok: boolean
  message: string
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const subject = String(formData.get("subject") || "").trim()
  const message = String(formData.get("message") || "").trim()

  if (!name || !email || !subject || !message) {
    return { ok: false, message: "Por favor completá todos los campos." }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Ingresá un correo válido." }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || "navecinemetro@gmail.com"

  if (!apiKey) {
    console.info("[contact]", { name, email, subject, message })
    return {
      ok: true,
      message:
        "¡Gracias! Recibimos tu mensaje. Te contactaremos pronto.",
    }
  }

  try {
    const { Resend } = await import("resend")
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Nave Cine Metro <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[NCM] ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return {
      ok: true,
      message: "¡Gracias! Recibimos tu mensaje. Te contactaremos pronto.",
    }
  } catch (error) {
    console.error("[contact] failed", error)
    return {
      ok: false,
      message: "No pudimos enviar tu mensaje. Intentá de nuevo o escribinos por teléfono.",
    }
  }
}

"use client"

import { useActionState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContact, type ContactState } from "@/app/actions/contact"

const initialState: ContactState = { ok: false, message: "" }

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState)
  const searchParams = useSearchParams()
  const defaultSubject = searchParams.get("asunto") ?? ""

  return (
    <div className="flex h-full flex-col rounded-xl bg-card px-5 py-6 ring-1 ring-foreground/10 md:px-6 md:py-7">
      <div>
        <h2 className="text-lg font-medium tracking-tight md:text-xl">
          Envianos un mensaje
        </h2>
        <p className="text-muted-foreground mt-2 text-sm text-pretty">
          Nos pondremos en contacto para contarte más detalles.
        </p>
      </div>

      <form action={action} className="mt-8 flex flex-1 flex-col space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input type="text" id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Asunto</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            required
            defaultValue={defaultSubject}
            key={defaultSubject || "subject"}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" name="message" rows={4} required />
        </div>
        <div className="mt-auto space-y-3 pt-2">
          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Enviando…" : "Enviar mensaje"}
          </Button>
          {state.message ? (
            <p
              className={
                state.ok ? "text-sm text-emerald-700" : "text-destructive text-sm"
              }
              role="status"
            >
              {state.message}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  )
}

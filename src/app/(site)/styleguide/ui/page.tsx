import { redirect } from "next/navigation"

/** @deprecated Usar /components — lab aislado sin chrome del sitio. */
export default function StyleguideUiRedirect() {
  redirect("/components")
}

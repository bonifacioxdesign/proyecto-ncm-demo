"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function StyleguideSelectDemo() {
  return (
    <Select defaultValue="cine">
      <SelectTrigger className="w-full max-w-xs">
        <SelectValue placeholder="Categoría" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="cine">Cine</SelectItem>
        <SelectItem value="teatro">Teatro</SelectItem>
        <SelectItem value="concierto">Concierto</SelectItem>
        <SelectItem value="taller">Taller</SelectItem>
      </SelectContent>
    </Select>
  )
}

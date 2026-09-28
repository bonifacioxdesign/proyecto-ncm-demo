"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { Plus, Edit2, Trash2, Loader, Eye, EyeOff } from "lucide-react";
import {
  createCategory,
  deleteCategory,
  getCategories,
  setCategoryStatus,
  updateCategory,
} from "@/app/actions/categories";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CATEGORY_COLOR_PRESETS,
  DEFAULT_CATEGORY_COLOR,
  categoryBadgeStyle,
} from "@/lib/category-color";

type Category = Awaited<ReturnType<typeof getCategories>>[number];

const EMPTY_FORM: { slug: string; name: string; color: string; description: string } = {
  slug: "",
  name: "",
  color: DEFAULT_CATEGORY_COLOR,
  description: "",
};

export default function CategoriasPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [includeInactive, setIncludeInactive] = useState(false);
  const [isPending, startTransition] = useTransition();

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getCategories({ includeInactive: includeInactive || undefined });
      setCategories(result);
    } catch {
      setError("Error al cargar categorías");
    } finally {
      setLoading(false);
    }
  }, [includeInactive]);

  useEffect(() => {
    // Data fetching effect: loads categories from backend on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, [refresh]);

  const openCreate = () => {
    setEditingId(null);
    setFormData(EMPTY_FORM);
    setError(null);
    setShowForm(true);
  };

  const openEdit = (cat: Category) => {
    setEditingId(cat.id);
    setFormData({
      slug: cat.slug,
      name: cat.name,
      color: cat.color,
      description: cat.description ?? "",
    });
    setError(null);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const fd = new FormData();
    fd.set("slug", formData.slug);
    fd.set("name", formData.name);
    fd.set("color", formData.color);
    fd.set("description", formData.description);

    startTransition(async () => {
      const result = editingId ? await updateCategory(editingId, fd) : await createCategory(fd);

      if (!result.success) {
        setError(result.error);
        return;
      }

      setShowForm(false);
      setFormData(EMPTY_FORM);
      setEditingId(null);
      await refresh();
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar esta categoría?")) return;
    startTransition(async () => {
      const result = await deleteCategory(id);
      if (!result.success) {
        setError(result.error);
        return;
      }
      await refresh();
    });
  };

  const handleSetStatus = (id: string, status: "ACTIVE" | "DEACTIVE") => {
    startTransition(async () => {
      const result = await setCategoryStatus(id, status);
      if (!result.success) {
        setError(result.error);
        return;
      }
      await refresh();
    });
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-foreground text-2xl font-bold">Categorías</h2>
          <p className="text-muted-foreground">Administra las categorías de eventos</p>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-foreground flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={includeInactive}
              onChange={(e) => setIncludeInactive(e.target.checked)}
              className="border-border h-4 w-4 rounded"
            />
            Ver inactivas
          </label>
          <button
            type="button"
            onClick={openCreate}
            className="bg-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white transition-all hover:shadow-lg"
          >
            <Plus className="h-4 w-4" />
            Nueva Categoría
          </button>
        </div>
      </div>

      {error && !showForm && (
        <div className="border-destructive bg-destructive/10 text-destructive mb-4 rounded-lg border p-4 text-sm">
          {error}
        </div>
      )}

      <div className="border-border bg-card overflow-hidden rounded-lg border shadow-sm">
        <table className="w-full">
          <thead className="bg-secondary/40">
            <tr>
              <th className="text-muted-foreground px-6 py-3 text-left text-xs font-bold tracking-wider uppercase">
                Nombre
              </th>
              <th className="text-muted-foreground px-6 py-3 text-left text-xs font-bold tracking-wider uppercase">
                Slug
              </th>
              <th className="text-muted-foreground px-6 py-3 text-left text-xs font-bold tracking-wider uppercase">
                Color
              </th>
              <th className="text-muted-foreground px-6 py-3 text-left text-xs font-bold tracking-wider uppercase">
                Descripción
              </th>
              <th className="text-muted-foreground px-6 py-3 text-right text-xs font-bold tracking-wider uppercase">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-muted-foreground px-6 py-8 text-center">
                  <Loader className="mx-auto h-5 w-5 animate-spin" />
                </td>
              </tr>
            ) : categories.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-muted-foreground px-6 py-8 text-center">
                  No hay categorías. Crea una para empezar.
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr
                  key={cat.id}
                  className={`border-border hover:bg-secondary/30 border-t ${
                    cat.status === "DEACTIVE" ? "opacity-60" : ""
                  }`}
                >
                  <td className="text-foreground px-6 py-4 text-sm font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      {cat.name}
                      {cat.status === "DEACTIVE" && (
                        <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                          Inactiva
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="text-muted-foreground px-6 py-4 font-mono text-sm">{cat.slug}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      style={categoryBadgeStyle(cat.color)}
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {cat.name}
                    </span>
                  </td>
                  <td className="text-muted-foreground max-w-xs px-6 py-4 text-sm">
                    {cat.description ? (
                      <span className="line-clamp-2">{cat.description}</span>
                    ) : (
                      <span className="text-xs italic opacity-60">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openEdit(cat)}
                        className="text-primary hover:bg-primary/10 flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold transition-colors"
                      >
                        <Edit2 className="h-3 w-3" />
                        Editar
                      </button>
                      {cat.status === "ACTIVE" ? (
                        <button
                          type="button"
                          onClick={() => handleSetStatus(cat.id, "DEACTIVE")}
                          disabled={isPending}
                          className="text-muted-foreground hover:bg-muted flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold transition-colors disabled:opacity-50"
                        >
                          <EyeOff className="h-3 w-3" />
                          Desactivar
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleSetStatus(cat.id, "ACTIVE")}
                          disabled={isPending}
                          className="flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold text-emerald-600 transition-colors hover:bg-emerald-500/10 disabled:opacity-50"
                        >
                          <Eye className="h-3 w-3" />
                          Activar
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDelete(cat.id)}
                        disabled={isPending}
                        className="text-destructive hover:bg-destructive/10 flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold transition-colors disabled:opacity-50"
                      >
                        <Trash2 className="h-3 w-3" />
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? "Editar categoría" : "Nueva categoría"}</DialogTitle>
            <DialogDescription>
              El slug es el identificador URL-safe (minúsculas, números y guiones).
            </DialogDescription>
          </DialogHeader>

          {error && (
            <div className="border-destructive bg-destructive/10 text-destructive rounded-lg border p-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Nombre</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-border bg-input w-full rounded-lg border px-3 py-2 text-sm"
                placeholder="Cine"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="border-border bg-input w-full rounded-lg border px-3 py-2 font-mono text-sm"
                placeholder="cine"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Color</label>
              <div className="flex flex-wrap items-center gap-2">
                {CATEGORY_COLOR_PRESETS.map((preset) => {
                  const selected = formData.color.toLowerCase() === preset.hex.toLowerCase();
                  return (
                    <button
                      key={preset.hex}
                      type="button"
                      onClick={() => setFormData({ ...formData, color: preset.hex })}
                      title={preset.name}
                      aria-label={preset.name}
                      className={`h-7 w-7 rounded-full border transition-all ${
                        selected
                          ? "ring-foreground ring-2 ring-offset-2"
                          : "border-border hover:scale-110"
                      }`}
                      style={{ backgroundColor: preset.hex }}
                    />
                  );
                })}
                <label
                  className="border-border relative h-7 w-7 cursor-pointer overflow-hidden rounded-full border transition-transform hover:scale-110"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #ef4444, #f59e0b, #eab308, #10b981, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #ef4444)",
                  }}
                  title="Color personalizado"
                  aria-label="Color personalizado"
                >
                  <input
                    type="color"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  />
                </label>
              </div>
              {formData.color && (
                <span
                  style={categoryBadgeStyle(formData.color)}
                  className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                >
                  Vista previa
                </span>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Descripción <span className="text-muted-foreground">(opcional)</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border-border bg-input w-full rounded-lg border px-3 py-2 text-sm"
                rows={4}
                placeholder="Texto descriptivo de la categoría"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="border-border hover:bg-secondary rounded-lg border px-4 py-2 text-sm font-medium"
                disabled={isPending}
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="bg-primary rounded-lg px-4 py-2 text-sm font-bold text-white transition-all hover:shadow-lg disabled:opacity-50"
              >
                {isPending ? "Guardando..." : editingId ? "Guardar cambios" : "Crear categoría"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

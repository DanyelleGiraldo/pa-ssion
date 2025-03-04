import { ChevronDown } from "lucide-react"
import { Button } from "./Button"

const categories = [
  { name: "MUJER", count: 160 },
  { name: "HOMBRE", count: 148 },
  { name: "ESTUCHERIA", count: null },
  { name: "UNISEX", count: 27 },
  { name: "MARCA", count: null },
]

export function Sidebar() {
  return (
    <aside className="hidden md:block">
      <div className="sticky top-4 py-6">
        <h3 className="mb-6 text-xl font-semibold text-primary">Categorías</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="w-full justify-between font-normal text-left hover:border-primary"
            >
              <span>
                {category.name}
                {category.count !== null && <span className="ml-2 text-sm text-gray-500">({category.count})</span>}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}


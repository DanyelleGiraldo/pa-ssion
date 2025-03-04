const products = [
  {
    id: 1,
    name: "Kenzo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "10%OFF",
  },
  {
    id: 2,
    name: "Jean Pascal",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "60%OFF",
  },
  {
    id: 3,
    name: "Tous",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "20%OFF",
  },
  {
    id: 4,
    name: "Kenzo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "10%OFF",
  },
  {
    id: 5,
    name: "Giorgio Armani",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "10%OFF",
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-xl">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute left-2 top-2 bg-primary text-white px-2 py-1 text-xs font-semibold rounded">
            {product.discount}
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop - Your Business",
  description: "Browse our collection of premium products",
}

const products = [
  {
    id: 1,
    name: "Noni juice",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 124,
    image: "/images/noni_order1.png",
    badge: "Best Seller",
    description: "High-quality product with exceptional features and durability.",
  },
  {
    id: 2,
    name: "Essential Product B",
    price: 49.99,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
    description: "Perfect for everyday use with modern design and functionality.",
  },
]

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Our Products</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover our carefully curated collection of premium products designed to meet your needs and exceed your
          expectations.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                width={300}
                height={300}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {product.badge && (
                <Badge
                  className="absolute top-2 left-2"
                  variant={product.badge === "Best Seller" ? "default" : "secondary"}
                >
                  {product.badge}
                </Badge>
              )}
            </div>

            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
        <p className="text-muted-foreground mb-6">
          Contact us for custom solutions or special requests. We're here to help!
        </p>
        <Button size="lg">Contact Us</Button>
      </div>
    </div>
  )
}

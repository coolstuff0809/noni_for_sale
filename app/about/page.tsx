import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Heart } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - AVT LLC",
  description:
    "Learn about AVT LLC's mission to empower healthier lives through natural, science-backed wellness products",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          About Us
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">About AVT LLC</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Founded in 2025, AVT LLC is a health-focused company committed to delivering high-quality, natural products
          that support overall wellness and vitality. What began as a small initiative by three passionate individuals
          has quickly grown into a trusted brand in the health and wellness space.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-8 md:grid-cols-2 mb-16">
        <Card>
          <CardHeader>
            <Target className="h-12 w-12 text-blue-500 mb-4" />
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              To empower healthier lives through science-backed, nature-inspired products. We believe that true health
              starts with what you put into your body. That's why we carefully source ingredients, focus on purity, and
              formulate with purpose.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Heart className="h-12 w-12 text-red-500 mb-4" />
            <CardTitle className="text-2xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              We carefully source ingredients, focus on purity, and formulate with purpose — ensuring that every product
              we offer contributes meaningfully to your daily well-being. Whether it's boosting immunity, supporting
              energy, or promoting balance, AVT LLC is here to help you feel your best — naturally.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Founders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three passionate individuals who started AVT LLC with a vision to make natural wellness accessible to
            everyone.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: "Co-Founder", role: "Health & Wellness Expert", image: "/placeholder.svg?height=300&width=300" },
            { name: "Co-Founder", role: "Product Development", image: "/placeholder.svg?height=300&width=300" },
            { name: "Co-Founder", role: "Operations & Strategy", image: "/placeholder.svg?height=300&width=300" },
          ].map((member) => (
            <Card key={member.role} className="text-center">
              <CardHeader>
                <Image
                  src={member.image || "/placeholder.svg"}
                  width={300}
                  height={300}
                  alt={member.name}
                  className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                />
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-muted rounded-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Growth</h2>
          <p className="text-lg text-muted-foreground">Numbers that reflect our commitment to excellence</p>
        </div>

        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">1K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">1</div>
            <div className="text-muted-foreground">Year Strong</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-muted-foreground">Founding Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-muted-foreground">Natural Products</div>
          </div>
        </div>
      </div>
    </div>
  )
}

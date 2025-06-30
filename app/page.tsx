import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Welcome to AVT LLC</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover natural, science-backed wellness products that support your health journey. We're committed
                  to delivering high-quality solutions that help you feel your best — naturally.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/shop">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Hero Image"
                className="aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose AVT LLC</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide exceptional value through our commitment to natural ingredients, scientific backing, and your
                overall wellness.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader className="text-center">
                <Star className="mx-auto h-12 w-12 text-yellow-500" />
                <CardTitle>Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We maintain the highest standards in everything we do, ensuring you receive only the best products and
                  services.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="mx-auto h-12 w-12 text-blue-500" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Our experienced professionals are dedicated to providing you with personalized solutions and
                  exceptional support.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Zap className="mx-auto h-12 w-12 text-green-500" />
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Quick and reliable service delivery to meet your needs and exceed your expectations every time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied customers who have chosen us for their needs.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

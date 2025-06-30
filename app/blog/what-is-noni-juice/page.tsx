import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What is Noni Juice? - AVT LLC Blog",
  description:
    "Learn about Noni juice made from Morinda Citrifolia, a powerful health-boosting fruit used for over 3,000 years in traditional medicine.",
}

export default function WhatIsNoniJuicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <div className="mb-8">
        <Badge className="mb-4">Noni Benefits</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-green-700">WHAT IS NONI JUICE?</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            Dr. Sarah Johnson
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            January 15, 2024
          </div>
          <span>5 min read</span>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Noni juice is made from the noni fruit, <em>Morinda Citrifolia</em> – a powerful, health-boosting fruit
              that ancient cultures have used for more than 3,000 years.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Yet in the past decade, the juice has gained popularity among health-conscious individuals. In fact,
              consumers who drink noni juice often report improvements in overall health, energy and well-being.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              The fruit itself is light yellow, lumpy and about the size of a mango. With a distinct smell and
              astringent flavour.
            </p>

            {/* Featured Image */}
            <div className="my-8">
              <Image
                src="/images/noni-juice-intro.png"
                width={800}
                height={600}
                alt="Fresh noni fruits and a glass of noni juice showing the natural product"
                className="w-full rounded-lg shadow-lg"
                priority
              />
              <p className="text-sm text-muted-foreground text-center mt-2">
                Fresh noni fruits alongside a glass of pure noni juice
              </p>
            </div>

            {/* Additional Product Display Image */}
            <div className="my-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-17%20at%208.13.45%E2%80%AFAM-p751hB2hMwnxXtkz57auH91KUgx4oa.png"
                width={800}
                height={500}
                alt="Complete Noni product display showing fresh fruits, powder, and juice in natural setting"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground text-center mt-2">
                Noni in all its forms - fresh fruit, powder, and pure juice showcasing the versatility of this
                superfruit
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-green-700">From Fruit to Wellness</h2>
            <p className="text-lg leading-relaxed mb-6">
              As you can see in the image above, Noni can be processed into various forms to suit different preferences
              and needs. Whether you prefer the convenience of Noni juice, the concentrated benefits of Noni powder, or
              want to experience the fruit in its most natural state, each form offers unique advantages for your
              wellness journey.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-green-700">The Ancient Superfruit</h2>
            <p className="text-lg leading-relaxed mb-6">
              For over three millennia, Pacific Island cultures have revered the noni fruit for its remarkable health
              properties. Traditional healers in Polynesia, Hawaii, and other Pacific regions have long understood what
              modern science is now confirming – that this unique fruit contains powerful compounds that support overall
              wellness.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-green-700">Why Noni Juice Today?</h2>
            <p className="text-lg leading-relaxed mb-6">
              In our modern world, people are increasingly seeking natural alternatives to support their health. Noni
              juice has emerged as a popular choice because it offers:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg">
              <li>Natural antioxidant properties</li>
              <li>Support for immune system function</li>
              <li>Potential energy enhancement</li>
              <li>Traditional wellness benefits backed by centuries of use</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-green-700">The AVT LLC Difference</h2>
            <p className="text-lg leading-relaxed mb-6">
              At AVT LLC, we understand the importance of preserving the natural integrity of this ancient superfruit.
              Our noni juice is carefully processed to maintain the fruit's beneficial compounds while ensuring the
              highest quality and purity standards.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-8">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Ready to Experience Noni?</h3>
              <p className="text-green-700 mb-4">
                Discover the natural power of noni juice and join thousands who have made it part of their daily
                wellness routine.
              </p>
              <Button asChild>
                <Link href="/shop">Shop Noni Juice</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-2">
                Health Research
              </Badge>
              <h3 className="text-xl font-semibold mb-2">
                <Link href="/blog" className="hover:text-primary">
                  7 Science-Backed Health Benefits of Noni Juice
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore the research behind Noni juice's powerful health benefits and antioxidant properties.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog">Read More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-2">
                Wellness Tips
              </Badge>
              <h3 className="text-xl font-semibold mb-2">
                <Link href="/blog" className="hover:text-primary">
                  How to Incorporate Noni Juice into Your Daily Routine
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn the best ways to consume Noni juice and maximize its health benefits.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

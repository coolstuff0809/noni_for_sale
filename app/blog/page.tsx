import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog - AVT LLC",
  description: "Read our latest articles about Noni juice benefits, wellness tips, and natural health insights",
}

const blogPosts = [
  {
    id: 1,
    title: "What is Noni Juice?",
    excerpt:
      "Discover the incredible health benefits of Noni juice, from immune support to energy enhancement. Learn why this Polynesian superfruit is taking the wellness world by storm.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "Noni Benefits",
    image: "/images/noni_pic1.png",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "7 Science-Backed Health Benefits of Noni Juice You Need to Know",
    excerpt:
      "Explore the research behind Noni juice's powerful health benefits, including antioxidant properties, immune system support, and natural energy enhancement.",
    author: "Michael Chen",
    date: "2024-01-12",
    category: "Health Research",
    image: "/images/noni_pic4.png",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "How to Incorporate Noni Juice into Your Daily Wellness Routine",
    excerpt:
      "Learn the best ways to consume Noni juice, optimal timing, dosage recommendations, and how to maximize its health benefits in your daily routine.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    category: "Wellness Tips",
    image: "/images/noni_pic2.png",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Noni Juice vs. Other Superfruits: What Makes It Special?",
    excerpt:
      "Compare Noni juice with other popular superfruits like acai, goji berries, and pomegranate. Discover what makes Noni unique in the superfruit family.",
    author: "David Kim",
    date: "2024-01-08",
    category: "Superfruit Comparison",
    image: "/images/noni_pic3.png",
    readTime: "7 min read",
  },
]

const categories = [
  "All",
  "Noni Benefits",
  "Health Research",
  "Wellness Tips",
  "Superfruit Comparison",
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Noni Juice Wellness Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with the latest insights about Noni juice benefits, wellness tips, and natural health research
          from our team of experts.
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="mb-12">
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
            src="/images/noni_pic1.png"
            width={1200}
            height={320}
            alt="Noni juice bottles and fresh Noni fruit - AVT LLC wellness blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">Discover the Power of Noni</h2>
              <p className="text-lg md:text-xl">Your guide to natural wellness and vitality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Featured Post */}
      <Card className="mb-12 overflow-hidden">
        <div className="grid gap-6 lg:grid-cols-2">
          <Image
            src="/images/noni_pic1.png"
            width={400}
            height={300}
            alt="Fresh Noni fruit growing on tree - Nature's superfruit elixir"
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <Badge className="w-fit mb-4">{blogPosts[0].category}</Badge>
            <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-muted-foreground mb-6 text-lg">{blogPosts[0].excerpt}</p>

            <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {blogPosts[0].author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(blogPosts[0].date).toLocaleDateString()}
              </div>
              <span>{blogPosts[0].readTime}</span>
            </div>

            <Button className="w-fit" asChild>
              <Link href="/blog/what-is-noni-juice">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={post.image || "/placeholder.svg"}
              width={400}
              height={300}
              alt={`${post.title} - Noni juice wellness article`}
              className="w-full h-48 object-cover"
            />

            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <CardTitle className="text-xl hover:text-primary cursor-pointer">{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/blog/what-is-noni-juice">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Noni Image Gallery */}
      <div className="mt-16 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">The Noni Journey</h2>
          <p className="text-lg text-muted-foreground">From fruit to bottle - see the natural process</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300&text=Noni+Tree+in+Nature"
              width={300}
              height={200}
              alt="Noni tree growing in natural environment"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">Noni Tree</div>
          </div>

          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300&text=Fresh+Noni+Fruit"
              width={300}
              height={200}
              alt="Fresh ripe Noni fruit ready for harvest"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">Fresh Fruit</div>
          </div>

          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300&text=Noni+Juice+Processing"
              width={300}
              height={200}
              alt="Noni juice processing and extraction"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">Processing</div>
          </div>

          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300&text=AVT+Noni+Juice+Bottle"
              width={300}
              height={200}
              alt="AVT LLC premium Noni juice bottle"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
              Final Product
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <Card className="mt-16 text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Stay Updated on Noni Wellness</CardTitle>
          <CardDescription>
            Subscribe to our newsletter to get the latest Noni juice research, wellness tips, and health insights
            delivered to your inbox.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-input rounded-md"
            />
            <Button>Subscribe</Button>
          </div>
        </CardContent>
      </Card>

      {/* Company Logo Footer */}
      <div className="mt-16 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/avt_llc_logo.png"
            width={200}
            height={80}
            alt="AVT LLC - Premium Noni Juice Company"
            className="h-16 md:h-20 w-auto"
          />
        </div>
        <p className="text-sm text-muted-foreground">© 2024 AVT LLC. All rights reserved.</p>
      </div>
    </div>
  )
}

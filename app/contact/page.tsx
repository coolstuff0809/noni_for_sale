import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Your Business",
  description: "Get in touch with us for any questions or inquiries",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What is this regarding?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
            </div>

            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get in touch</CardTitle>
              <CardDescription>Here are the different ways you can reach us.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    info@yourbusiness.com
                    <br />
                    support@yourbusiness.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">How quickly do you respond?</h4>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you offer support?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we provide comprehensive support for all our products and services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can I schedule a consultation?</h4>
                <p className="text-sm text-muted-foreground">
                  Contact us to schedule a free consultation at your convenience.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

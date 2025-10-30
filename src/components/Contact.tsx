'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { GridPattern } from "./aceternity/grid-pattern";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "david.smith@example.com",
      href: "mailto:david.smith@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 987-6543",
      href: "tel:+15559876543"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/davidsmith",
      username: "@davidsmith"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/davidsmith",
      username: "in/davidsmith"
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "https://discord.com",
      username: "davidsmith#1337"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <GridPattern
        width={60}
        height={60}
        maxOpacity={0.1}
        numSquares={30}
        className="absolute inset-0"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? I'd love to hear about your project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-center space-x-4 p-4 rounded-lg border bg-card card-3d">
                      <div className="p-2 rounded-full bg-muted shadow-3d relative z-10">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="relative z-10">
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <a href={contact.href} className="hover:underline">
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-6">Connect Online</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={social.label} className="flex items-center justify-between p-4 rounded-lg border bg-card card-3d">
                      <div className="flex items-center space-x-4 relative z-10">
                        <div className="p-2 rounded-full bg-muted shadow-3d">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div>
                          <p>{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <Button variant="outline" size="sm" asChild>
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            Follow
                          </a>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send Message</CardTitle>
                <p className="text-muted-foreground">Let's discuss your project</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject">Subject</label>
                  <Input id="subject" placeholder="Project inquiry" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

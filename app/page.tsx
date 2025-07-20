"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with Next.js and TypeScript",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with real-time updates",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
    },
    {
      title: "Project Three",
      description: "AI-powered data analytics dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      tags: ["Python", "TensorFlow", "D3.js"],
    },
  ];

  return (
    <main className="min-h-screen text-gray-700">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 to-pink-600"
        style={{
          background: 'linear-gradient(to right, #f9a8d4, #db2777)',
          minHeight: '100vh'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-700">
              Maheswari Manoharan
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-[600px]">
               Software Engineering Manager Specializing In Modern Web Technologies Powered With Artificial Intelligence
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon">
                <Link href="https://github.com/maheswarim-work">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="https://www.linkedin.com/in/maheswarimanoharan/">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="https://x.com/MaheswariM2037">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="mailto:maheswarim.work@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        className="py-20 bg-white/80 backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(4px)',
          padding: '80px 0'
        }}
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-gray-700">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700">
              As a technology professional with a Master’s in Computer Science, I bring 12+ years of experience across industries such as commercial/specialty insurance, automotive and employment background verification. I enjoy solving real-world problems by designing event-driven microservices, serverless applications, and APIs that are scalable, reliable, and easy to maintain.
Over the years, I’ve reported into both software development and SRE (Site Reliability Engineering) organizations, giving me a well-rounded perspective on system design, product delivery, and platform reliability. I’m now transitioning into an Engineering Manager role, combining architectural decision-making, hands-on coding, team leadership, and strong collaboration with product and business partners in strategic analytics.
I work extensively with Java (12 years) and Python (3+ years), and have led initiatives across the full API lifecycle from requirements gathering and design to development, testing, deployment, and production support. I bring 9 years of experience working in the cloud with AWS and am currently deepening my knowledge of Microsoft Azure.
My infrastructure-as-code expertise includes 5 years with Terraform and experience with AWS CloudFormation. I also leverage GitHub Actions (2 years), AWS CodePipeline (3 years), Jenkins (5 years) to automate CI/CD pipelines, enforce testing standards, and accelerate release cycles.
On the data side, I’m currently working with SQL technologies including Databricks and Snowflake.
              </p>
              <div className="mt-6 space-y-2">
                <h3 className="font-semibold text-gray-700">Technical Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Technical Lead", "Python", "AWS", "Azure", "Microservices", "REST APIs", "Event-Driven Architecture", "Cloud-Based Systems", "Terraform", "GitHub Actions", "Databricks", "Snowflake"].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      style={{
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '14px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000&auto=format&fit=crop" 
                alt="Profile" 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-gray-700">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-white/80 backdrop-blur-sm border-gray-200">
                <div className="aspect-video relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-700">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 bg-white/80 backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(4px)',
          padding: '80px 0'
        }}
      >
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 text-gray-700">Let's Connect</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-[600px] mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Button asChild size="lg">
            <Link href="mailto:contact@example.com">
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
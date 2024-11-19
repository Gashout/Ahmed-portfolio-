import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Server,
  Database,
  Globe,
  Cpu,
  Cloud,
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with Next.js, Node.js, and PostgreSQL",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
    link: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat app with React and Express",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=60",
    link: "#",
  },
  {
    title: "Task Management System",
    description:
      "Kanban-style project management tool with drag-and-drop functionality",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60",
    link: "#",
  },
];

const skills = [
  {
    name: "Frontend Development",
    icon: Globe,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Server,
    items: ["Node.js", "Express", "NestJS", "GraphQL"],
  },
  {
    name: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    name: "DevOps",
    icon: Cloud,
    items: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Full Stack Developer
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-8">
            Building modern web applications with cutting-edge technologies.
            Passionate about creating efficient, scalable, and user-friendly
            solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View projects</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">
              Hello! I’m Ahmed, a final-year software engineering student with a
              deep passion for full-stack development. Specializing in the
              JavaScript/TypeScript ecosystem, I enjoy crafting intuitive,
              performant web applications from the ground up. With a solid
              foundation in both frontend and backend technologies, I'm
              constantly honing my skills and looking forward to contributing to
              projects that make an impact. Driven to learn and innovate, I’m
              excited to bring fresh perspectives and dedication to the world of
              web development.
            </p>
            <p className="text-lg mb-4">
              My journey in software development began with a profound curiosity
              about the inner workings of the web. Since then, I have immersed
              myself in a diverse range of projects, from creating small
              business websites to developing large-scale enterprise
              applications.
            </p>
            <p className="text-lg">
              I am passionate about exploring new technologies and best
              practices, continuously striving to enhance my skills. My goal is
              to deliver high-quality solutions that not only meet client needs
              but also create a meaningful impact in the digital landscape.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQF0Y2xPwaCZFw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695007847008?e=1736380800&v=beta&t=pUwaGG2kmD-e57O8tw_AHqVKcOEpZ3XDTFhaNwaeqxs"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.link}>View Project</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="h-6 w-6" />
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-muted-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <a
                href="mailto:contact@AhmedGashout998@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/Gashout"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.linkedin.com/in/ahmed-gashout-73698320a/"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Ahmed Gashout. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

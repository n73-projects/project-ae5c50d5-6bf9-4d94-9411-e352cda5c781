import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe, Server } from "lucide-react";

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates using WebSocket connections. Built with Next.js and MongoDB.",
      tech: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      title: "API Analytics Dashboard",
      description: "Real-time analytics dashboard for monitoring API performance and usage statistics. Built with React and integrated with various monitoring services.",
      tech: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      link: "#",
      github: "#"
    }
  ];

  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    backend: ["Python", "Go"],
    database: ["SQL"],
    tools: ["Docker", "Git"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Full Stack Developer
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building scalable web applications with modern technologies.
            Experienced in full-stack development and system design.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Full-stack developer with experience building web applications. Working with modern
                  frameworks and focusing on writing clean, maintainable code.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Solving complex problems and building systems that scale. Learning
                  new technologies and contributing to open-source projects.
                </p>
                <Button>
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </Button>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Code2 className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Server className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Backend Development</h4>
                    <p className="text-sm text-muted-foreground">Python, Go</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Database className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Database</h4>
                    <p className="text-sm text-muted-foreground">SQL</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">DevOps</h4>
                    <p className="text-sm text-muted-foreground">Docker, Git</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-primary">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Database</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Available for new opportunities and interesting projects.
              Let's discuss potential collaboration.
            </p>
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

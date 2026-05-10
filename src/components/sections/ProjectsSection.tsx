"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaggerContainer } from "@/components/animations/ScrollAnimations";
import AnimatedSection from "@/components/animations/ScrollAnimations";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
    >
      <Card className="h-full overflow-hidden group hover:shadow-[0_0_40px_var(--glow-primary)] transition-all duration-300">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-60" />

          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-[var(--primary)] text-white px-3 py-1 rounded-full text-xs font-medium">
              <Star className="w-3 h-3" fill="currentColor" />
              Featured
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="group-hover:text-[var(--primary)] transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags?.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState("all");

  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags || []))
  ).slice(0, 6);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tags?.includes(filter));

  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="font-mono text-sm text-[var(--accent)] tracking-widest mb-4 block">
            MY WORK
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            A selection of projects I&apos;ve built, from e-commerce platforms
            to real-time applications.
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.2}>
          <Tabs defaultValue="all" onValueChange={setFilter} className="mb-12">
            <TabsList className="flex flex-wrap justify-center gap-2">
              <TabsTrigger value="all">All</TabsTrigger>
              {allTags.map((tag) => (
                <TabsTrigger key={tag} value={tag}>
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={filter} className="mt-8">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </StaggerContainer>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}

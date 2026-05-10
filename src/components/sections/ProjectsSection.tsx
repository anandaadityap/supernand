"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="h-full border-4 border-brand-text bg-brand-surface hover:bg-brand-surface/80 hover:shadow-brutal transition-all duration-200">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-brand-text/20" />

          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-brand-primary text-brand-text px-3 py-1 font-mono text-xs font-bold uppercase shadow-brutal-sm">
              <Star className="w-3 h-3" fill="currentColor" />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-archivo font-extrabold text-xl uppercase mb-2 text-brand-text group-hover:text-brand-muted transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-brand-muted font-mono line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.slice(0, 4).map((tag) => (
              <span 
                key={tag} 
                className="border-2 border-brand-text px-2 py-0.5 font-mono text-xs uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-mono font-bold text-brand-text hover:text-brand-primary transition-colors"
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
                className="flex items-center gap-1.5 text-sm font-mono font-bold text-brand-muted hover:text-brand-text transition-colors"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
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
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="border-2 border-brand-text px-3 py-1 font-mono text-xs uppercase tracking-widest mb-4 inline-block shadow-brutal-sm">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-archivo font-extrabold uppercase mb-4 text-brand-text">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto mb-4" />
          <p className="text-base text-brand-muted font-mono max-w-xl mx-auto">
            // A selection of projects I&apos;ve built
          </p>
        </div>

        {/* Filter Tabs - Brutalist Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 font-mono text-sm font-bold uppercase border-4 transition-all duration-200 ${
              filter === "all"
                ? "bg-brand-text text-brand-surface shadow-brutal"
                : "border-brand-text bg-brand-surface hover:shadow-brutal-sm"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 font-mono text-sm font-bold uppercase border-4 transition-all duration-200 ${
                filter === tag
                  ? "bg-brand-text text-brand-surface shadow-brutal"
                  : "border-brand-text bg-brand-surface hover:shadow-brutal-sm"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

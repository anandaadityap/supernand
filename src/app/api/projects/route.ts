import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getAuthUser } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");

    const where = featured === "true" ? { featured: true } : {};

    const projects = await prisma.project.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await getAuthUser(); // Verify auth

    const body = await request.json();
    const {
      title,
      slug,
      description,
      content,
      thumbnail,
      gallery,
      tags,
      liveUrl,
      githubUrl,
      featured,
    } = body;

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        content,
        thumbnail,
        gallery: gallery || [],
        tags: tags || [],
        liveUrl,
        githubUrl,
        featured: featured || false,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Failed to create project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await getAuthUser();

    const body = await request.json();
    const { id, ...data } = body;

    const project = await prisma.project.update({
      where: { id },
      data,
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Failed to update project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

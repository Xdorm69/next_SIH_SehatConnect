import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// LatestData with images continuing from PopularData
const LatestData = [
  {
    title: "The Future of AI in Everyday Life",
    description:
      "Exploring how artificial intelligence is shaping healthcare, education, and personal productivity.",
    date: "2025-01-12",
    img: "/blog/articles/5.jpg",
  },
  {
    title: "Top 10 Travel Destinations for 2025",
    description:
      "From hidden gems to popular hotspots, discover where you should plan your next adventure.",
    date: "2025-02-05",
    img: "/blog/articles/6.jpg",
  },
  {
    title: "Mastering Remote Work: Tips & Tools",
    description:
      "A practical guide to staying productive and maintaining work-life balance while working from home.",
    date: "2025-03-18",
    img: "/blog/articles/7.jpg",
  },
  {
    title: "Climate Change and Its Global Impact",
    description:
      "Analyzing the challenges of climate change and what steps nations are taking to adapt.",
    date: "2025-04-09",
    img: "/blog/articles/8.jpg",
  },
  {
    title: "Beginner's Guide to Investing in Crypto",
    description:
      "Breaking down the basics of cryptocurrency and what new investors should know before starting.",
    date: "2025-05-21",
    img: "/blog/articles/9.jpg",
  },
  {
    title: "Healthy Living: Nutrition Myths Debunked",
    description:
      "Experts share insights on common nutrition misconceptions and the truth behind them.",
    date: "2025-06-14",
    img: "/blog/articles/10.jpg",
  },
];

// PopularData
const PopularData = [
  {
    title: "Best Strategy to Achieve Profitable Harvest",
    description:
      "Optimal strategies to achieve profitable harvests include a comprehensive approach to farm management, selection of appropriate crop varieties, and implementation of efficient practices.",
    date: new Date().toISOString(),
    img: "/blog/articles/1.jpg",
  },
  {
    title: "Abundant Harvest from Agriculture Farm Land Shows Success.",
    date: new Date().toISOString(),
    img: "/blog/articles/2.jpg",
  },
  {
    title: "Latest Innovations Increase Milk Production and Quality",
    date: new Date().toISOString(),
    img: "/blog/articles/3.jpg",
  },
  {
    title: "Best Practices In Harvesting Vegetables From Plantations",
    date: new Date().toISOString(),
    img: "/blog/articles/4.jpg",
  },
];

export async function seedBlogsOnPrisma(createdBy) {

  console.log("🌱 Seeding database...");

  // Insert LatestData
  for (const post of LatestData) {
    await prisma.blogs.create({
      data: {
        title: post.title,
        description: post.description,
        img: post.img,
        popular: false,
        createdBy: createdBy || "AmitojAdmin",
      },
    });
  }

  // Insert PopularData
  for (const post of PopularData) {
    await prisma.blogs.create({
      data: {
        title: post.title,
        description: post.description || null,
        img: post.img,
        popular: true,
        createdBy: createdBy || "AmitojAdmin",
      },
    });
  }

  console.log("✅ Database has been seeded!");
}





"use server";

import { prisma } from "@/lib/db";

const medicines = [
  "Paracetamol 500mg",
  "Ibuprofen 200mg",
  "Amoxicillin 500mg",
  "Ciprofloxacin 500mg",
  "Metformin 500mg",
  "Atorvastatin 10mg",
  "Omeprazole 20mg",
  "Amlodipine 5mg",
  "Cetirizine 10mg",
  "Loratadine 10mg",
  "Azithromycin 250mg",
  "Vitamin C 500mg",
  "Vitamin D3 1000 IU",
  "Insulin Glargine",
  "Prednisolone 5mg",
  "Salbutamol Inhaler",
  "Montelukast 10mg",
  "Ranitidine 150mg",
  "Furosemide 40mg",
  "Clopidogrel 75mg",
  "Levothyroxine 50mcg",
  "Omeprazole 40mg",
  "Metoprolol 50mg",
  "Warfarin 5mg",
  "Doxycycline 100mg",
  "Hydrochlorothiazide 25mg",
  "Allopurinol 100mg",
  "Fluoxetine 20mg",
  "Lorazepam 1mg",
  "Aspirin 75mg",
];

const imgUrls = [
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGljaW5lfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1671721438260-1adb3749253f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGljaW5lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1562243061-204550d8a2c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljaW5lfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1668487826666-baa00865bc13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGljaW5lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZGljaW5lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1516826435551-36a8a09e4526?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZGljaW5lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZGljaW5lfGVufDB8fDB8fHww",
];

export const seedMedicines = async (vendorId: string) => {
  // Check if vendor exists

  const vendorExists = await prisma.vendorProfile.findUnique({
    where: { userId: vendorId },
  });

  if (!vendorExists) {
    throw new Error(`Vendor with id ${vendorId} does not exist`);
  }

  const products = medicines.map((name, i) => ({
    name,
    description: `High-quality medicine: ${name}`,
    price: parseFloat((Math.random() * 100 + 10).toFixed(2)),
    stock: Math.floor(Math.random() * 100) + 10,
    imageUrl: imgUrls[i % imgUrls.length],
    vendorId: vendorExists.id,
  }));

  const created = await prisma.product.createMany({
    data: products,
  });

  console.log(`Inserted ${created.count} medicines for vendor ${vendorId}`);
};

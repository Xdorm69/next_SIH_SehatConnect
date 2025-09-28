"use server";

import { prisma } from "@/lib/db";
import { getVendor } from "@/lib/helpers/auth";

export async function getSSRProducts() {
  const { success, message, vendor } = await getVendor();
  if (!success || !vendor) return { success: false, message };

  try {
    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: vendor.id },
    });

    if (!vendorProfile) {
      return { success: false, message: "Vendor profile not found" };
    }

    const products = await prisma.product.findMany({
      where: {
        vendorId: vendorProfile.id,
      },
    });
    
    return { success: true, products };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Internal server error" };
  }
}

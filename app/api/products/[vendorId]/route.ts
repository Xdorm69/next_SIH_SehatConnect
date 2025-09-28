import { prisma } from "@/lib/db";
import { getVendor } from "@/lib/helpers/auth";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ vendorId: string }> }
) {
  const { success, message, vendor } = await getVendor();
  if (!success) return { success, message };

  try {
    const vendorId = (await context.params).vendorId;
    if (!vendorId) return { success: false, message: "Vendor ID not found" };

    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: vendorId },
    });
    if (!vendorProfile)
      return { success: false, message: "Vendor profile not found" };

    const products = await prisma.product.findMany({
      where: { vendorId: vendorProfile.id },
    });
    
    return { success: true, products };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Internal server error" };
  }
}

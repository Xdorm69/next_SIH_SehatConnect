import { prisma } from "@/lib/db";
import { getVendor } from "@/lib/helpers/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ vendorId: string }> }
) {
  const { success, message } = await getVendor();
  if (!success) return NextResponse.json({ success, message });

  try {
    const params = (await context.params);
    const vendorId = params.vendorId;
    if (!vendorId)
      return NextResponse.json({
        success: false,
        message: "Vendor ID not found",
      });

    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: vendorId },
    });
    if (!vendorProfile)
      return NextResponse.json({
        success: false,
        message: "Vendor profile not found",
      });

    const products = await prisma.product.findMany({
      where: { vendorId: vendorProfile.id },
    });

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}

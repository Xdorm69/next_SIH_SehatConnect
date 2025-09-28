import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function getAdmin() {
  const session = await getServerSession(authOptions);

  if (!session) return { success: false, message: "Please authenticate first" };

  if (session.user.role !== "ADMIN")
    return { success: false, message: "Unauthorized" };

  return { success: true, admin: session.user };
}

export async function getVendor() {
  const session = await getServerSession(authOptions);
  if (!session) return { success: false, message: "Please authenticate first" };

  if (session.user.role === "ADMIN")
    return { success: false, message: "admin", admin: session.user };

  if(session.user.role === "VENDOR")
    return { success: true, message: 'vendor',vendor: session.user };

  return { success: false, message: "Unauthorized" };
}

export async function getDoctor() {
  const session = await getServerSession(authOptions);
  if (!session) return { success: false, message: "Please authenticate first" };

  if (session.user.role === "ADMIN")
    return { success: false, message: "admin", admin: session.user };

  if(session.user.role === "DOCTOR")
    return { success: true, message: 'doctor',doctor: session.user };

  return { success: false, message: "Unauthorized" };
}

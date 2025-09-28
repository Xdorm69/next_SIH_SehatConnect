
"use server";

import { prisma } from "@/lib/db";
import { getAdmin } from "@/lib/helpers/auth";

export async function getSSRUsers(){
    const admin = await getAdmin();
    if(!admin.success) return {success: false,message: "Unauthorized", users: []};
    try {
        const users = await prisma.user.findMany({where: {id: {not: admin.admin?.id}}})
        return {success: true,message: "Success", users};
    } catch (error) {
        console.log(error);
        return {success: false,message: "Failed to fetch users", users: []};
    }
}
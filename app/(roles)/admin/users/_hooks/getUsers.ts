export async function getUsers(){
    try {
        const users = await fetch("/api/users", {
            method: "GET",
            credentials: "include",
            cache: "no-store",
        });
        const data = await users.json();
        if(!users.ok) throw new Error(data.message || "Failed to fetch users");
        return {success: true, message: "Success", users: data.users};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Failed to fetch users", users: []};
    }
}
import { UserRoles } from "@prisma/client";

export const avatarUrl = (role: UserRoles) => {
  let url = "";
  switch (role) {
    case "USER":
      url = "/profile";
      break;
    case "VENDOR":
      url = "/vendor";
      break;
    case "DOCTOR":
      url = "/doctor";
      break;
    case "ADMIN":
      url = "/admin";
      break;
  }
  return url;
};

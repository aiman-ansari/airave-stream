import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
export const users = [
  {
    _id: uuid(),
    firstName: "Test",
    lastName: "User",
    email: "testuser@gmail.com",
    password: "testuser123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

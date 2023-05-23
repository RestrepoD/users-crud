import { axiosInstance } from "../api/axiosInstance";

export async function createUser(userData) {
  try {
    await axiosInstance.post("users/", userData);
  } catch (error) {
    console.error(error);
  }
}

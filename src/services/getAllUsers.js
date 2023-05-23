import { axiosInstance } from "../api/axiosInstance";

export async function getAllUsers() {
  try {
    const res = await axiosInstance.get("users/");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

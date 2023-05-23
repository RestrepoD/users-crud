import { axiosInstance } from "../api/axiosInstance";

export async function deleteUser(id) {
  try {
    await axiosInstance.delete(`users/${id}/`);
  } catch (error) {
    console.error(error);
  }
}

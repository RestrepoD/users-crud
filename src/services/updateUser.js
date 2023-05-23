import { axiosInstance } from "../api/axiosInstance";

export async function updateUser(id, newUserData) {
  try {
    await axiosInstance.put(`users/${id}/`, newUserData);
  } catch (error) {
    console.error(error);
  }
}

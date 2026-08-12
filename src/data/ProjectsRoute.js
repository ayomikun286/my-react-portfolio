import { API_URL } from "../config.js";


export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    console.log("Fetched projects:", data); // Log the fetched data for debugging
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
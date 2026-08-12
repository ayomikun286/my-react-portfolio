import { API_URL } from "../config.js";


export const allTestimonials = async () => {
  try {
    const response = await fetch(`${API_URL}/testimonial`);
    const data = await response.json();
    console.log("Fetched testimonials:", data); // Log the fetched data for debugging
    return data.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};
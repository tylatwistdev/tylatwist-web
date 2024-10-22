import axios from 'axios';
import { BASE_URL } from './config';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Function to fetch services data
export const fetchServicesData = async () => {
    console.log("BASE_URL", BASE_URL);
    
    try {
        const response = await axios.get("/data/services.json");
        return response.data; // Return the JSON data
    } catch (error) {
        console.error("Error fetching services data:", error);
        return [];
    }
};

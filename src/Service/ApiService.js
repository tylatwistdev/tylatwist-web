import axios from 'axios';
import { BASE_URL } from './config';
import { SERVICE_LIST } from './API_ENDPOINTS';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Function to fetch services data
export const fetchServicesData = async (data = {}) => {
    console.log("BASE_URL", BASE_URL);
    
    try {
        const response = await service.post(SERVICE_LIST, data);
        return successResponse(response);
      } catch (error) {
        const message = {
          message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
      }
};

import axios from 'axios';
import { BASE_URL } from '../config';
import { SERVICE_LIST } from './API_ENDPOINTS';
import { successResponseList } from './ApiResponse';
let service = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Function to fetch services data
export const fetchServicesData = async () => {
  try {
    const response = await service.get(SERVICE_LIST);
    return successResponseList(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
};

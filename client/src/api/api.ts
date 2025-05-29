// client/src/api/api.ts
import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api/products';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // <--- DOUBLE CHECK THIS
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
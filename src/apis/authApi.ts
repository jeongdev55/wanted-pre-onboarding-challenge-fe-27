import axios from "axios";
import { AuthRequest } from "../types/auth.ts"
import { setToken } from "../utils/token.ts";

const API_BASE_URL = 'http://localhost:8080';


export const signup = async (data:AuthRequest)=>{
    const response = await axios.post(`${API_BASE_URL}/users/create`,data);

    const { token } = response.data;
    setToken(token);

    return response.data;
}

export const login = async (data:AuthRequest)=>{
    const response = await axios.post(`${API_BASE_URL}/users/login`,data);

    const { token } = response.data;
    setToken(token);

    return response.data;
}
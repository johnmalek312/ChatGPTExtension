import axios from 'axios';
import { Pin, PinCreate } from '../types/pin';

const API_URL = process.env.VITE_API_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
    baseURL: API_URL,
});

export const pinService = {
    createPin: async (pin: PinCreate): Promise<Pin> => {
        const response = await api.post('/pins', pin);
        return response.data;
    },

    getUserPins: async (userId: string): Promise<Pin[]> => {
        const response = await api.get(`/pins/${userId}`);
        return response.data;
    },

    getChatPins: async (userId: string, chatId: string): Promise<Pin[]> => {
        const response = await api.get(`/pins/${userId}/${chatId}`);
        return response.data;
    },

    deletePin: async (pinId: string): Promise<void> => {
        await api.delete(`/pins/${pinId}`);
    }
}; 
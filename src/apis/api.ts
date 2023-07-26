import { REACT_APP_API_HOST } from '@env';
import axios, {AxiosInstance} from "axios";

export const API_HOST = REACT_APP_API_HOST

interface ExtendedAxiosInstance extends AxiosInstance {
    getAPIHost?: () => string;
    setToken?: (access_token: string, force?: boolean) => void;
}

const api: ExtendedAxiosInstance = axios.create({
    baseURL: API_HOST,
})

export default api;

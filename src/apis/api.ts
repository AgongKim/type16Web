import axios, {AxiosInstance} from "axios";

export const API_HOST = process.env.REACT_APP_API_HOST

interface ExtendedAxiosInstance extends AxiosInstance {
    getAPIHost?: () => string;
    setToken?: (access_token: string, force?: boolean) => void;
}

const api: ExtendedAxiosInstance = axios.create({
    baseURL: API_HOST,
})

api.defaults.headers.post['Content-Type'] = 'application/json';


export default api;

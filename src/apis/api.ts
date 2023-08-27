import axios, {AxiosInstance} from "axios";

export const API_HOST = process.env.REACT_APP_API_HOST

export function getAPIHost(): string | undefined {
    return API_HOST;
}

interface ExtendedAxiosInstance extends AxiosInstance {
    getAPIHost?: () => string | undefined;
    setToken?: (access_token: string, force?: boolean) => void;
}

const api: ExtendedAxiosInstance = axios.create({
    baseURL: getAPIHost(),
})

export function setToken(access_token:string) {
    if (access_token) {
        api.defaults.headers.common.authorization = `Bearer ${access_token}`;
    } else {
        delete api.defaults.headers.common.authorization;
    }
}

export function getToken() {
    const token = api.defaults.headers.common.authorization;
    if (!!token) {
        return true;
    } else {
        return false;
    }
}

api.getAPIHost = getAPIHost;
api.setToken = setToken;

export default api;

import axios from "axios";
import { RepositoryItem } from "../interfaces/RepositoryItems";
import AuthService from "./AuthService";
import { UserInfo } from "../interfaces/UserInfo";

const GITHUB_API_URL = "https://api.github.com";
//const GITHUB_API_TOKEN = "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"; //Reemplazar por token valida

const githubApi = axios.create({
    baseURL: GITHUB_API_URL,
});

githubApi.interceptors.request.use((config) => {
    const authHeader = AuthService.getAuthHeader();
    if (authHeader) {
        config.headers.Authorization = authHeader;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const fetchRepositories = async (): Promise<RepositoryItem[]> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
            params: {
                per_page: 100,
                sort: "created",
                direction: "desc",
                affiliation: "owner",
            }
        });


        const reposData: RepositoryItem[] = response.data.map((repo: any) => ({
            name: repo.name,
            description: repo.description || null,
            imageUrl: repo.owner?.avatar_url || null,
            owner: repo.owner?.login || null,
            language: repo.language || null,
        }));

        return reposData;
    } catch (error) {
        console.error("Error fetching repositories:", error);
        return [];
    }
}

export const createRepository = async (repo: RepositoryItem): Promise<void> => {
    try {
        const response = await githubApi.post('/user/repos', repo);
        console.log("Repository created:", response.data);
    } catch (error) {
        console.error("Error creating repository:", error);
    }
}

export const getUserInfo = async (): Promise<UserInfo | null> => {
    try {
        const response = await githubApi.get('/user');
        return response.data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        return null;
    }
}

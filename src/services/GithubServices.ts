import axios from "axios";
import { RepositoryItem } from "../interfaces/RepositoryItems";
import { UserInfo } from "../interfaces/UserInfo";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_API_TOKEN = "ghp_0XXXXXXXXXXXXXXXXXXXXXXXX"; //Reemplazar por token valida

/**
 * 
 * @returns Lista de repositorios del usuario autenticado
 */

export const fetchRepositories = async (): Promise<RepositoryItem[]> => {
    try {
        //console.log("TOKEN:", import.meta.env.VITE_GITHUB_API_TOKEN);
        const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`,
            },
            params: {
                per_page: 100,
                sort: "created",
                direction: "desc",
            },
        });

        console.log("STATUS:", response.status);
        console.log("DATA:", response.data);
        console.log("ES ARRAY:", Array.isArray(response.data));

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
        const response = await axios.post(`${GITHUB_API_URL}/user/repos`, repo, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`,
            },
        });
        console.log("Repository created:", response.data);
    } catch (error) {
        console.error("Error creating repository:", error);
    }
};

/**
 * 
 * @returns Informacion del usuario autenticado
 */
export const getUserInfo = async (): Promise<UserInfo | null> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/user`, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`,
            },
        })
        return response.data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        return null;
    }
}



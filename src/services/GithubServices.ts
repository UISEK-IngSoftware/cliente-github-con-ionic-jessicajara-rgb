import axios from "axios";
import { RepositoryItem } from "../interfaces/RepositoryItems";

const GITHUB_API_URL = "https://api.github.com";
<<<<<<< Updated upstream
const GITHUB_API_TOKEN = "ghp_XXXXXXXXXXXXXXXXXXXXXXXXXX"; //Reemplazar por token valida
=======
const GITHUB_API_TOKEN = "XXXXXXXXXXXXXXXXXXXXXXXXXXX"; //Reemplazar por token valida

/**
 * 
 * @returns Lista de repositorios del usuario autenticado
 */
>>>>>>> Stashed changes

export const fetchRepositories = async (): Promise<RepositoryItem[]> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`,
            },
            params: {
                per_page: 100,
                sort: "created",
                direction: "desc",
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

import { fetchPosts } from "./services/postsService.js"; 
import { fetchUsers } from "./services/usersService.js"; 

async function main() {
    try {
        // Requisições em paralelo
        const [posts, users] = await Promise.all([
            fetchPosts(),
            fetchUsers()
        ]);

        console.log("Total de posts:", posts.length); 
        console.log("Total de users:", users.length); 

    } catch (error) {
        console.error("Erro: ", error);
    }
}

main();

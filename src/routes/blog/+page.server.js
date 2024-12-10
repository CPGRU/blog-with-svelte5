
export async function load(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return {
        summaries: posts.map((post)=>({
            slug: post.id,
            title: post.title
        }))
    }
}
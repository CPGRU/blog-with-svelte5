
export async function load({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    const post = await response.json();
    

    return {
        post
    }
}
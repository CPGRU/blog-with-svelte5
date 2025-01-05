import pool from '$lib/server/db';

export async function load(request){
    console.log(request);
    const query = `
    SELECT id, description, complete
    FROM todos
    `;
    const results = await pool.query(query);
    
    return {
        todos: results.rows.map((todo)=>({
            id: todo.id,
            description: todo.description
        }))
    };
};

export const actions = {
    create: async({request})=>{
        const data = await request.formData();
        const description = data.get('description');
        
        const query = `
        INSERT INTO todos(description)
        VALUES($1)
        `;
        const result = await pool.query(
            query,
            [description]
        );
        console.log("insert data", result)
    },

};


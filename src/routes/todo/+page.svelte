<script>
    let { data } = $props();
</script>

<div class="centered">
    <h1>todo list</h1>

    <form method="POST" action="?/create">
        <label class="grid-col-2">
            add todo
            <input name="description" autocomplete="off" required />
        </label>
    </form>

    <ul>
        {#each data.todos as todo (todo.id)}
            <li>
                <form method="POST" action="?/delete" class="flex-justify-between">
                    <input type="hidden" name="id" value={todo.id}/>
                    <span>{todo.description}</span>
                    <button aria-label="Mark as complete"></button>
                </form>
            </li>
        {/each}
    </ul>
</div>


<style>
    .centered {
        max-width: 20em;
        margin: 0 auto;
    }
    .grid-col-2 {
        display: grid;
        grid-template-columns: 1fr 4fr;
    }
  
    .flex-justify-between {
        display: flex;
        justify-content: space-between;
    }
 
    button {
        border: none;
        background: url(./delete.svg) no-repeat 50% 50%;
        background-size: 1rem 1rem;
        cursor: pointer;
        height: 100%;
        aspect-ratio: 1;
        opacity: 0.5;
        transition: opacity 0.2s; 
    }

    button:hover {
        opacity: 1;
    }

</style>

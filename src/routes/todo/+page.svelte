<script>
    let { data } = $props();
</script>

<h1>todo list</h1>

<form method="POST" action="?/create">
    <label>
        add todo
        <input name="description" autocomplete="off"/>
    </label>
</form>

<ul>
    {#each data.todos as todo (todo.id)}
        <li>{todo.description}</li>
    {/each}
</ul>
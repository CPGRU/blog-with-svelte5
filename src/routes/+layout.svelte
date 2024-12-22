<script>
    let {children} = $props();
</script>

<nav>
    <a href="/blog">Blog</a>
    <a href="/todo">Todo</a>
</nav>

{@render children()}
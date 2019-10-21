<template>
    <header class="shadow-lg bg-blue-400 flex h-16 relative w-full min-w-full" style="top: 0;">
        <h1 class="text-white my-auto mx-auto font-sans uppercase">{{title}}</h1>
    </header>
</template>
<script>
export default {
    name: 'Header',
    props: ['title'],
    setup(){}
}
</script>
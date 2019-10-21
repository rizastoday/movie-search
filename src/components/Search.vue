<template>
    <form class="w-2/5 h-24 p-2 rounded flex flex-row  mx-auto mt-5">
        <input type="text"
            placeholder="Type to search or '/' to focus"
            ref="search"
            class="w-full text-search mx-auto rounded-lg h-12 bg-gray-200 hover:bg-gray-300 active:border-0 focus:shadow-lg focus:border-0 border-0 px-4 py-2 focus:border-transparent text-2xl text-gray-600 uppercase"
            :value="movieTitle"
            @keyup="handleChange"
            @keypress.enter="handleClick"
        />
    </form>
</template>
<script>
import { ref } from '@vue/composition-api'
export default {
    name: 'Search',
    props: ['search'],
    mounted(){
        window.addEventListener('keypress', function(e){
            const key = String.fromCharCode(e.keyCode)
            key === '/' ? this.$refs.search.focus(): false
        }.bind(this))
    },
    setup({search}, {emit}){
        const movieTitle = ref(search);
        return {
            movieTitle,
            handleChange(event){
                movieTitle.value = event.target.value
            },
            handleClick(event){
                event.preventDefault();
                emit('search', movieTitle.value);
            }
        }
    }
}
</script>
<style>
    .text-search:active{
        border: none !important;
    }
</style>
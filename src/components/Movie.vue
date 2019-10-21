<template>
    <div class="flex flex-col p-5 rounded bg-gray-300 hover:shadow-lg" @click="getInfo(movie)">
        <div>
            <img :src="movie.Poster" :alt="alt" class="w-4/5 m-5">
        </div>
        <h2 class="text-center font-sans text-lg">{{movie.Title}}</h2>
        <p class="text-center text-gray-700 font-sans">{{movie.Year}}</p>
    </div>
</template>
<script>
import { computed } from '@vue/composition-api'
export default {
    name: 'Movie',
    props:['movie'],
    setup({movie}){
        const alt = computed(()=> movie.Title)
        return {
            alt,
            getInfo(p){
                console.log(p)
            }
        }
    }
}
</script>
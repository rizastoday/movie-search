<template>
  <div id="app" class="min-w-full flex flex-col">
    <Header :title="`Movie Search with Vue Composition API`" />
    <Search :search="state.search" @search="handleSearch" />
    <div class="justify-around px-8 py-5" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 3fr)); grid-gap: 20px; align-items: stretch;">
      <Movie class="mx-auto max-h-full" v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import Search from './components/Search'
import Movie from './components/Movie'
import {movieAPI} from './hooks/movieAPI'

export default {
  name: 'App',
  components:{
    Header, Search, Movie
  },
  setup(){
    const state = movieAPI()
    return {
      state : state,
      handleSearch(search){
        state.loading = true;
        state.search = search;
      }
    }
  }
}
</script>
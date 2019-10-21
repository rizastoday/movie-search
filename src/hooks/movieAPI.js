import { reactive, watch } from '@vue/composition-api'
const API_KEY = 'a5549d08'

export const movieAPI = ()=>{
    const state = reactive({
        search: 'Joker',
        loading: true,
        movies: [],
        errorMessage: null
    });

    watch(()=>{
        const MOVIE_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;
        fetch(MOVIE_URL)
            .then(res => res.json())
            .then(resJson => {
                state.movies = resJson.Search.sort((a,b)=>(a.Year > b.Year ? -1 : 1))
                state.loading = false;
            })
    });

    return state
}
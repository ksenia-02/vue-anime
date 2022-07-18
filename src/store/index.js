import Vue from "vue"
import {createStore} from 'vuex'

const store = createStore({
        state: {
            backendUrl: "http://127.0.0.1:8000",
            genre: [],
            genreSingle: [],
            marks: [],
        },
        mutations: {
            set_genre(state, genres) {
                state.genre = genres;
            },
            set_marks(state, marks) {
                state.marks = marks;
            }
        },
        actions: {
            getGenreFromAPI({commit}) {
                return fetch(
                    `${this.state.backendUrl}/genre/`,
                ).then(response => response.json().then(data => commit('set_genre', data)))
            },
            setGenresSingle({commit}, list_genre) {
                this.state.genreSingle = list_genre
            },
            loadListMarks({commit}) {
                return fetch(
                    `${this.state.backendUrl}/star/`
                ).then(response => response.json().then(data => commit('set_marks', data)))
            }
        }
        ,
        modules: {}
        ,
        getters: {
            getServerUrl: state => {
                return state.backendUrl
            },
            getGenresSingle: state => {
                return state.genreSingle
            },
            getMark: (state) => (id) => {
                return state.marks.find(function (mark) {
                        return mark.id === id
                    }
                )
            }
        }

    })
;

export default store;
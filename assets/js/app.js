"use strict";

let numberOfFilms = prompt('Скільки фільмів ви подивилися?'),

    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };



for (let i = 1; i <= 2; i++) {
    let a = prompt("Який фільм подивилися?"),
        b = prompt("Яку оцінку поставите?");

    if (a != null && b != null && a != '' && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }




}



console.log(personalMovieDB);

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви подивилися?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви подивилися?');
    }

}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {

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
}
// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Too low films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are cool viewer");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are cinema sitter");
    } else {
        console.log("Opps Error");
    }
}

// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("Shit");
    }

}

// showMyDB();



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let c = prompt(`Your favoite genre is ${i}`);
        personalMovieDB.genres[i - 1] = с;

    }

}
writeYourGenres();



console.log(personalMovieDB);

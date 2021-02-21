"use strict";

let numberOfFilms;



// start();

const personalMovieDB = {


    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        numberOfFilms = +prompt('Скільки фільмів ви подивилися?');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Скільки фільмів ви подивилися?');
        }

    },
    rememberMyFilms: function () {

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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Too low films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are cool viewer");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are cinema sitter");
        } else {
            console.log("Opps Error");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log("Shit");
        }

    },

    writeYourGenre: function () {
        for (let i = 1; i <= 3; i++) {
            let answer = prompt(`Твій улюблений жанр під номером ${i} є:`);

            if (answer == '' || answer == null) {
                console.log('Error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = answer;

            }


            personalMovieDB.genres.forEach((element, i) => {
                console.log(`Любимий жанр ${i + 1} це ${element}`);
            });
        }


    }

};


function toogleVisibleMyDB() {
    if (personalMovieDB.privat) {
        personalMovieDB.privat = true;
    } else {
        personalMovieDB.privat = false;
    }
}



personalMovieDB.writeYourGenre();

// toogleVisibleMyDB();




// rememberMyFilms();




// detectPersonalLevel();



// showMyDB();



// writeYourGenres();



console.log(personalMovieDB);


// const soldier = {
//     health: 100,
//     armor: 400
// };


// const John = Object.create(soldier);
// John.health = 200;
// John.name = "John";


// console.log(John);
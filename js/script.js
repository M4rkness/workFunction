"use strict";

// ! Практическая задача №1 
// * (Работа с обьектами, массивами, alert)

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genras: [],
    privat: false
};


//     h = prompt("Какие вы любите смотреть жанр №1?", ""),
//     y = prompt("Какие вы любите смотреть жанры №2?", ""),
//     c = prompt("Какие вы любите смотреть жанры №3?", "");

    
// personalMovieDB.movies[a] = b; 
// personalMovieDB.actors[f] = p;
// personalMovieDB.genras.push(h,y,c);


// console.log(personalMovieDB);


// ! Практическая задача №2 
// * Задание 1 и 2 (Работа с условием и циклами) 
// * Автоматизация фильмов 
// todo for


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");
    
        if (a !=  null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done!");
        } else {
            console.log("Error!");
            i--;
        }
        // personalMovieDB.movies[a] = b; 
    }
}

// rememberMyFilms();

// console.log(personalMovieDB);

// * Задание 3  
// todo работа с условием


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка!");
    }
}

// detectPersonalLevel();


// * Задание 4

// todo while

// let i = 0;

// while (i < 1) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");
    
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("Done!");
//         i++;

//     } else {
//         console.log("Error!");
//         i--;
//     }
// }

// todo do while

// do {
//     console.log(i);
//     i++;
// }

// while (i < 1) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");
    
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("Done!");
//         i++;

//     } else {
//         console.log("Error!");
//         i--;
//     }
// }

// console.log(personalMovieDB);


// ! Практическая работа №3
// * Работа с функциями 

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genras[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

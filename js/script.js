"use strict";

 // ! Практическая задача №1 
    // * (Работа с обьектами, массивами, alert)
    
    // todo Задание 1 (Практическая работа №4)

    const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,

        start: function() {
                personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        
                while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
                
            }
        },

        rememberMyFilms: function() {
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
            }
        },

        detectPersonalLive: function() {
            if (personalMovieDB.count < 10) {
                console.log("Просмотрено довольно мало фильмов!");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель!");
            } else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман!");
            } else {
                console.log("Произошла ошибка!");
            }
        },

        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },

        toggleVisibleDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
        
        // todo Задание 2 (Практическая работа №4)
        writeYourGenres: function() {
            
            for(let i = 1; i < 2; i++) {
            //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre === "" || genre == null) {
            //     console.log("Вы ввели некорректные данные или вовсе их не ввели");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;

            // todo 2 способ 

            let genres = prompt("Введите ваши любимые жанры через запятую");
            if (genres === "" || genres == null ) {
                console.log("Вы ввели некорректные данные или ввели их вовсе неправильно");
                i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort(); // ! перебирает слово по регистру если с верхнего то становится в вверх списка
                }
        }
    
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`);
        });
    }
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


    // * Задание 3  
    // todo работа с условием


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




 // ! Практическая работа №4 
    // * Работа с обьектами




















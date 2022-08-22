let numberOfFilms;
function init() {
    numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?"));

    while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?"));
    }
}

init();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};


// let i = 2;


// while (i > 0) {
//     const oneOfTheLastFilm = prompt("Один из последних просмотренных фильмов?",);
//     const filmGrade = prompt("На сколько вы его оцените?", "");

//     if (oneOfTheLastFilm != null && oneOfTheLastFilm.length < 50 && oneOfTheLastFilm != "" && filmGrade != null && filmGrade.length < 50 && filmGrade != "") {
//         personalMovieDB["movies"][oneOfTheLastFilm] = filmGrade;
//         i--;
//     } else {
//         i++;
//     }

// }

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const oneOfTheLastFilm = prompt("Один из последних просмотренных фильмов?");
        const filmGrade = prompt("На сколько вы его оцените?");

        if (oneOfTheLastFilm != null && oneOfTheLastFilm.length < 50 && oneOfTheLastFilm != "" && filmGrade != null && filmGrade.length < 50 && filmGrade != "") {
            personalMovieDB["movies"][oneOfTheLastFilm] = filmGrade;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

let yourGenres;

function writeYourGenres(object) {
    for (let i = 1; i < 4; i++) {
        yourGenres = prompt(`${i}: Ваш любимый жанр?`);
        object["genres"][i - 1] = yourGenres;
    }

    return object["genres"];
}

writeYourGenres(personalMovieDB);

function detectPersonalLevel() {
    if (personalMovieDB["count"] < 10) {
        console.log("Просмотрено довольно мало фильмов :)");
    } else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB["count"] <= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Ошибка");
    }
}

detectPersonalLevel();

function showMyDB(object) {
    if (object.hasOwnProperty("private")) {
        if (object["private"] === false) {
            return console.log(object);
        } else {
            return console.log(`private: ${object["private"]}`);
        }
    } else {
        return console.log(`не имеет  поля private`);
    }
}

showMyDB(personalMovieDB);




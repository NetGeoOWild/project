const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

// for (let i = 0; i < 2; i++) {
//     const oneOfTheLastFilm = prompt("Один из последних просмотренных фильмов?");
//     const filmGrade = prompt("На сколько вы его оцените?");

//     if (oneOfTheLastFilm != null && oneOfTheLastFilm.length < 50 && oneOfTheLastFilm != "" && filmGrade != null && filmGrade.length < 50  && filmGrade != "") {
//         personalMovieDB["movies"][oneOfTheLastFilm] = filmGrade;
//     } else {
//         i--;
//     }
// }

let i = 2;


while (i > 0) {
    const oneOfTheLastFilm = prompt("Один из последних просмотренных фильмов?",);
    const filmGrade = prompt("На сколько вы его оцените?", "");

    if (oneOfTheLastFilm != null && oneOfTheLastFilm.length < 50 && oneOfTheLastFilm != "" && filmGrade != null && filmGrade.length < 50 && filmGrade != "") {
        personalMovieDB["movies"][oneOfTheLastFilm] = filmGrade;
        i--;
    } else {
        i++;
    }

}

// if (personalMovieDB["count"] < 10) {
//     console.log("Просмотрено довольно мало фильмов :)");
// } else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
//     console.log("Вы классический зритель");
// }else if(personalMovieDB["count"] <= 30){
//     console.log("Вы киноман");
// }else{
//     console.log("Ошибка");
// }

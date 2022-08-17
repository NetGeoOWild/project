const numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?"));
const oneOfTheLastFilm = prompt("Один из последних просмотренных фильмов?");
const filmGrade = prompt("На сколько вы его оцените?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

personalMovieDB["movies"][oneOfTheLastFilm] = filmGrade;
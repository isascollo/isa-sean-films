import { MovieReview } from "../types/types";

const movieReviews: MovieReview[] = [
  {
    title: "Khabi Khushi Khabi Gham",
    year: 2001,
    image: "https://cinemachaat.files.wordpress.com/2014/04/k3g.jpg",
    isaRating: 5,
    seanRating: 4.5,
  },
  {
    title: "Extraordinary Attorney Woo",
    year: 2022,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTAzNzlhYjItN2MxZS00ZTg4LWFmZGQtN2I1ZWE5YjgzODY3XkEyXkFqcGdeQXVyNjk1NzU1Mjk@._V1_.jpg",
    isaRating: 5,
    seanRating: 4.5,
  },
  {
    title: "Bridgerton",
    year: 2020,
    image:
      "https://img-cloud.megaknihy.sk/3309369-large/baacb4992d23df3b7a1a9a3dda437378/bridgerton-the-viscount-who-loved-me-bridgertons-book-2.jpg",
    reviewText:
      "Think of this show as UFC for women: You’ve got the Daphnes and Sharmas to your McGregors and Adesanyas, the Queen Charlotte to your Dana White, the Lady Whistledown to your Joe Rogan, the houses of Bridgerton and Featherington to your varied martial arts stables, and the marriage ceremonies to the title fights. Once you’ve made this connection, this show becomes quite engaging.",
    isaRating: 4.5,
    seanRating: 4,
  },
  {
    title: "Griselda",
    year: 2024,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTZlNjRiOGYtZjVlYy00Y2Y2LThjNmItNmVkY2U0ZjVjOGU4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
    isaRating: 4,
    seanRating: 3.5,
  },
  {
    title: "Angry Boys",
    year: 2011,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTUzNDhlZDMtZjJlYS00MWU3LWIxMWQtMzRhYWFlNTM0ZjBjXkEyXkFqcGdeQXVyNDA5NTgxNjU@._V1_.jpg",
    isaRating: 3.5,
    seanRating: 3.5,
  },
  {
    title: "Ja'mie Private School Girl",
    year: 2013,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTM4NzQ4Njk1MV5BMl5BanBnXkFtZTgwNjkyNzg3MDE@._V1_.jpg",
    isaRating: 3.5,
    seanRating: 3.5,
  },
  {
    title: "Wayne's World",
    year: 1992,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDAyNDY3MjUtYmJjYS00Zjc5LTlhM2MtNzgzYjNlOWVkZjkzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    isaRating: 5,
    seanRating: 5,
  },
  {
    title: "Saltburn",
    year: 2023,
    image:
      "https://m.media-amazon.com/images/M/MV5BM2NmMDQ1ZWEtNDU4OS00MGIxLWEyMGMtMTM2YmFkYzNhYmMxXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
    isaRating: 3,
    seanRating: 2,
  },
  {
    title: "Kroll Show",
    year: 2013,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQ5Mjg4MzAtNDdkYS00OWMzLWE1YzYtOTdjOTk5MjUzNjE1XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg",
    isaRating: 3.5,
    seanRating: 4.5,
  },
  {
    title: "The Endless Summer",
    year: 1966,
    image: "https://www.surfertoday.com/images/movies/the-endless-summer.jpg",
    isaRating: 5,
    seanRating: 5,
  },
  {
    title: "Fear and Loathing in Las Vegas",
    year: 1998,
    image:
      "https://m.media-amazon.com/images/M/MV5BY2RkY2M2N2QtZGY5ZS00YmVjLThmNTItY2ZkM2JlYmFhZWQyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    isaRating: 3,
    seanRating: 4.5,
  },
  {
    title: "Summer Heights High",
    year: 2007,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTk2NTZiNzMtZDI4Mi00MTIyLWI2MGMtNjkzZWViODkyMTUwXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_FMjpg_UX1000_.jpg",
    isaRating: 5,
    seanRating: 5,
  },
  {
    title: "Pepsi Where's My Jet?",
    year: 2022,
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/Pepsi%2C_wheres_my_jet_poster.jpg",
    isaRating: 4.5,
    seanRating: 4.5,
  },
  {
    title: "The Darjeeling Limited",
    year: 2007,
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1e/Darjeeling_Limited_Poster.jpg",
    isaRating: 5,
    seanRating: 5,
  },
  {
    title: "Moonrise Kingdom",
    year: 2012,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9005688_v_v8_aa.jpg",
    isaRating: 4.5,
    seanRating: 4.5,
  },
  {
    title: "Asteroid City",
    year: 2023,
    image:
      "https://resizing.flixster.com/f4I6JsVCXk2dYle3nbDYv7nW3Xg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M3NTZmY2M1LTZiOGMtNDY3ZC1iZWU0LWEzYmJmY2VhZmY1Mi5qcGc=",
    isaRating: 3.5,
    seanRating: 3.5,
  },
  {
    title: "Wayne's World 2",
    year: 1993,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTdhODcyMGMtMzg3NC00MTViLWJiZjktZWIyY2NhNWZhYzUxXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_FMjpg_UX1000_.jpg",
    isaRating: 4,
    seanRating: 3.5,
  },
  {
    title: "Mean Girls (2024)",
    year: 2024,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDExMGMyN2QtYjRkZC00Yzk1LTkzMDktMTliZTI5NjQ0NTNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    isaRating: 3,
    seanRating: 1,
  },
  {
    title: "But I'm A Cheerleader",
    year: 1999,
    image:
      "https://m.media-amazon.com/images/M/MV5BNmZjNGVmYmItZWFmNi00ODQ1LThmZTUtMzYzMGJlMjZjMGFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    isaRating: 5,
    seanRating: 4,
  },
  {
    title: "Don't Look Up",
    year: 2021,
    image:
      "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    isaRating: 3.5,
    seanRating: 4,
  },
  {
    title: "Priscilla",
    year: 2023,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Priscilla_poster.jpeg/220px-Priscilla_poster.jpeg",
    isaRating: 4,
    seanRating: 3.5,
  },
  {
    title: "Kath and Kim",
    year: 2002,
    image:
      "https://m.media-amazon.com/images/M/MV5BNjU5M2YxNTctMDhmMS00YTE0LTg1MTItNzhmYzcyZmUxYmYzXkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_FMjpg_UX1000_.jpg",
    isaRating: 4.5,
    seanRating: 4.5,
  },
  {
    title: "Kaf and Kem (Werner Herzog)",
    year: 2022,
    image:
      "https://scontent.fmel10-1.fna.fbcdn.net/v/t1.15752-9/423542098_287625494106820_7883572998318141708_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=aMfKwoBHqbsAX8ud0fJ&_nc_ht=scontent.fmel10-1.fna&oh=03_AdSElLWC-qhZltl6c0ZI4_i9xatsBjEnRuZhI7leshJHmQ&oe=65F95329",
    isaRating: 5,
    seanRating: 5,
  },
  {
    title: "Love Actually",
    year: 2003,
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/Love_Actually_movie.jpg",
    isaRating: 4,
    seanRating: 4,
  },
  {
    title: "Grand Budapest Hotel",
    year: 2014,
    image:
      "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg",
    isaRating: 5,
    seanRating: 5,
  },
  {
    title: "The Princess Diaries",
    year: 2001,
    image:
      "https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    isaRating: 5,
    seanRating: 4,
  },
  {
    title: "The White Lotus (Season 1)",
    year: 2021,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19964690_b_v13_ad.jpg",
    isaRating: 5,
    seanRating: 4.5,
  },
  {
    title: "The White Lotus (Season 2)",
    year: 2022,
    image:
      "https://resizing.flixster.com/SFhplA4nPsGw0PeGI1UlpFNj_eM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vYzMxNWRlYWQtZmJiOS00ZGE4LTliZWYtMjI3YjA2NzQ3MTc4LmpwZw==",
    isaRating: 5,
    seanRating: 4.5,
  },
];

export default movieReviews;

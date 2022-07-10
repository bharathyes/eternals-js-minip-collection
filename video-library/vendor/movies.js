// 1. add data
// 2. get data
// 3. search by name
// 4. filter by year/genre
// 5. filter/ sort by rating

window.movieDb = {};

(function (root, publicFns) {
  root.movieDb.movies = publicFns();
})(window, function () {
  var movieList = {};

  var Movie = function (name, genre, studio, rating, year, tags) {
    // send as obj
    this.name = name;
    this.genre = genre;
    this.studio = studio;
    this.rating = rating;
    this.year = year;
    this.tags = tags;
  };

  Movie.prototype.getData = function () {
    return {
      name: this.name,
      genre: this.genre,
      studio: this.studio,
      rating: this.rating,
      year: this.year,
      tags: this.tags,
    };
  };
  Movie.prototype.setData = function (name, genre, studio, rating, year, tags) {
    if (typeof name !== "undefined") this.name = name;
    if (typeof genre !== "undefined") this.genre = genre;
    if (typeof studio !== "undefined") this.studio = studio;
    if (typeof rating !== "undefined") this.rating = rating;
    if (typeof year !== "undefined") this.year = year;
    if (typeof tags !== "undefined") this.tags = tags;
  };

  Movie.prototype.getGenre = function () {
    return this.genre;
  };
  Movie.prototype.getStudio = function () {
    return this.studio;
  };
  Movie.prototype.getRating = function () {
    return this.rating;
  };
  Movie.prototype.getYear = function () {
    return this.year;
  };
  Movie.prototype.getTags = function () {
    return this.tags;
  };
  Movie.prototype.addTags = function (tags) {
    if (typeof this.tags === "undefined") {
      this.tags = [];
    }
    tags.forEach((tag) => {
      this.tags.push(tag);
    });
  };
  Movie.prototype.removeTags = function (tags) {
    tags.forEach((tag) => {
      this.tags.pop(tag);
    });
  };

  function isDataPresent(movieData) {
    return (
      typeof movieData.genre === "undefined" ||
      typeof movieData.studio === "undefined" ||
      typeof movieData.rating === "undefined" ||
      typeof movieData.year === "undefined"
    );
  }

  var addNewMovieData = function (data) {
    if (typeof data === "undefined") {
      return "No data provided.";
    }
    // Object.keys(data).forEach((key) => {
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; ++i) {
      if (typeof movieList[keys[i]] !== "undefined") {
        return "Duplicate data found";
      }
      if (isDataPresent(data[keys[i]])) {
        return "Invalid data";
      }
      var movieData = data[keys[i]];
      var movieObj = new Movie(
        keys[i],
        movieData.genre,
        movieData.studio,
        movieData.rating,
        movieData.year,
        movieData.tags
      );
      movieList[keys[i]] = movieObj;
    }
    return "Movie data added";
  };

  var listAllMovies = function () {
    return movieList;
  };

  var getMovies = function (name) {
    var movieObj = movieList[name];
    if (typeof movieObj === "undefined") {
      return "Movie not found";
    }
    return movieObj;
  };

  // filter by config
  var filteredList = function (filter) {
    var matchList = {};
    var keys = Object.keys(movieList);

    for (var i = 0; i < keys.length; ++i) {
      if (
        movieList[keys[i]].getGenre() === filter.genre &&
        movieList[keys[i]].getStudio() === filter.studio &&
        movieList[keys[i]].getRating() === filter.rating &&
        movieList[keys[i]].getYear() === filter.year
      ) {
        matchList[keys[i]] = movieList[keys[i]];
      }
    }
    return matchList;
  };

  var searchByTags = function (tags) {
    var matchList = {};
    var keys = Object.keys(movieList);
    for (var i = 0; i < keys.length; ++i) {
      tags.forEach(tag => {
        if (movieList[keys[i]].getTags().includes(tag)) {
          matchList[keys[i]] = movieList[keys[i]];
        }
      });
    }
    return matchList;
  };

  return {
    addNewMovieData: addNewMovieData,
    listAllMovies: listAllMovies,
    getMovies: getMovies,
    filteredList: filteredList,
    searchByTags: searchByTags,
  };
});

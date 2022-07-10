var filter = {
    "genre": "Comedy",
    "studio": "Disney",
    "rating": 3,
    "year": 2010,
};

console.log("Movie filtering with : " + JSON.stringify(filter));
console.log(movieDb.movies.filteredList(filter));



var tags = ["all-time", "favs"];
console.log("Tag search with : " + tags);

console.log(movieDb.movies.searchByTags(tags));

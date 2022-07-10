# Video Library Management

> Maintain a record of movies, series in our local storage with tags and descriptions. 


## WHY: 

1. OS search is either slow or limited to a given directory. 
2. Fuzzy search also not possible in most OS
3. Video files can't store much metadata about the movie and/or are not easily searchable.
4. Library applications such as Kodi, Plex need dedicated servers or lack a easily accessible interfaces.


## Goals:

1. Add entry of movies, series and provide the location of the files.
	- Determine if the movie is already present in the library.
2. Implement fuzzy search using `find` and `fzf` tool to search the library directories.
3. Filter based on tags.


## Future expansion: (needs OS integration of application)

1. Fuzzy search with movie name, tags, etc.
2. Able to launch the files from the app.


## Limitations: 

1. Lacks integration with online DB like IMDB that are provided by Kodi, etc.
2. Manual entry of all data.
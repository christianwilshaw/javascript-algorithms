var fs = require('fs');

 var movies;
 var movieList = List;
try {  
    movies = fs.readFileSync('films.txt', 'utf8').split("\r\n"); //split the array based on the carriage return.
    for (var i = 0; i < movies.length; ++i)
    {
        movies[i] = movies[i].trim(); // trim white space from end.
    }
    console.log(movies);
    for (var i = 0; i < movies.length; ++i){
       movieList.List.append(movies[i]);
    } 
    return;
} catch(e) {
    console.log('Error:', e.stack);
}
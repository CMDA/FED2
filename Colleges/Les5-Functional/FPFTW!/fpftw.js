(function() {
    'use strict';
    
    // Load external data
    loadJSON('http://dennistel.nl/movies', parse, function(xhr) { console.error(xhr); });

    // Ugly JSON function, it does way too much..
    function loadJSON(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if (success) { success(JSON.parse(xhr.responseText)); }
                } else {
                    if (error) { error(xhr); }
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    }

    function parse(data) {
        print(
            _.filter(
                _.map(data, function (movie, i){
                    movie.reviews   = _.reduce(movie.reviews,   function(memo, review){   return memo + review.score; }, 0) / movie.reviews.length;
                    movie.directors = _.reduce(movie.directors, function(memo, director){ return memo + director.name + ' '; }, '');
                    movie.actors    = _.reduce(movie.actors,    function(memo, actor){    return memo + actor.actor_name + ', ';}, '');
                    return movie;
                }), 
                function (movie) { return _.contains(movie.genres, 'Drama');
            })
        );
    }

    function print(stuff){
        _.each(stuff, function(item){ console.log(item); });
    };
}());





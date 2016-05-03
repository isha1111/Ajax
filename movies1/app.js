// adding on click event
$('#search').on('click',function(){
  // calling ajax function
  $.ajax({
    url: 'http://www.omdbapi.com/?s='+$('#movie').val(),
    method: 'get',
    crossDomain:true,
    dataType: "jsonp"
  }).done(function(movies){
      movie = movies.Search
      // appending each movie from the list of movies to the document.body
      for(var i=0;i<movie.length;i++) {
        var $movie = $('<p>').text(movie[i].Title).css({'border':'1px solid gray','text-align':'center'});
        $(document.body).append($movie);
        console.log(movie[i].Title);
      }

  });
});

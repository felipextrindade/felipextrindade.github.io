$(document).ready(function(){
      $('.parallax').parallax();

      $.get( "https://api.github.com/users/felipextrindade", function( data ) {
            $("#great-title").append(data.name);
            $("#logo").append('<img id="logo-image" src="'+ data.avatar_url +'" height="128px" width="128px">');
            $('#bio').append('<span class="black-text">'+ data.bio +'</span');
      });
      
});



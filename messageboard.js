$( document ).ready(function() {

    $("#submitMessage").on('submit', function(e){
      e.preventDefault();
      let message = {
        username: $("#username").val(),
        message: $("#message").val()
      };

      $.ajax({
           type: 'POST',
           url: 'http://originmessages.herokuapp.com/messages',
           contentType: "application/json",
           data: JSON.stringify(message),
           dataType: "json"
         });

    return false;
    });

});

$(function () {

    $("#add").on("click", function (event) {
        event.preventDefault();
        console.log("submit button")

        console.log($('#burgerName').val());
        var newBurger = {
            burger_name: $("#burgerName").val(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger" + newBurger);
            location.reload();
        });
    });
    $(".eatburger").on("submit", function(event){
        event.preventDefault();

        var id=$(this).children('.change-devour').val();
        var devouredState = {
            devoured: id
        };
        console.log("ID: " + id)
        console.log("Devoured State: " + devouredState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("Burger has been" + devouredState);
            location.reload();
        });
    });
    $('.deleteBurger').on('submit', function(event) {
        event.preventDefault();
        var id = $(this).children('.delete').val();
    
        $.ajax('/api/burgers/' + id, {
          type: "DELETE"
        }).then(function(){
          console.log("Deleting burger with id of: " + id);
          location.reload();
        })
    
      })
});
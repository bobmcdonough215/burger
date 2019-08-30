import React from 'react';



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
    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: id
        };
        console.log("ID: " + id)
        console.log("Devoured State: " + devouredState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger has been" + devouredState);
            location.reload();
        });
    });
    $(".deleteBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");



        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
          }).then(location.reload(true));
        });
      });


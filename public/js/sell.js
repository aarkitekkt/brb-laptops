$(document).ready(function () {

    $("#newLaptop").on("submit", function (event) {

        event.preventDefault();

        var newLaptop = {
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#number").val().trim(),
            city: $("#city").val().trim(),
            brand: $("#brand").val().trim(),
            model: $("#model").val().trim(),
            operating_system: $("#os").val().trim(),
            laptop_condition: $("#condition").val(),
            processor: $("#processor").val().trim(),
            graphics: $("#graphics").val().trim(),
            ram: $("#ram").val().trim(),
            screen_dimension: $("#screen").val().trim(),
            hd_storage: $("#storage").val().trim(),
            release_year: $("#year").val().trim(),
            summary: $("#summary").val().trim(),
            price: $("#price").val().trim(),
            main_photo: $("#mainphoto").val().trim(),
            additional_photos: $("#additionalPhotos").val().trim()
        }

        // Send the POST request.
        $.ajax("/api/laptops", {
            type: "POST",
            data: newLaptop
        }).then(
            function () {
                console.log("New Laptop has been added to the inventory");
                // Reload the page to get the updated list
                location.assign("/");
            }
        );

        console.log(newLaptop);

    });

    $(".soldButton").click(function () {


        var soldId = $(this).data("id");

        console.log("Laptop ID is " + soldId);

        $.ajax("/api/laptops/" + soldId, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Laptop has been sold!");
                location.reload();
            }
        );
    });

});
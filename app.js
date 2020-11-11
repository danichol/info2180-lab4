<script type="text/javascript">

    $(document).ready(function () { // Make sure the elements are loaded on the page
        // Listen for a click event on the button
        $('#srch').click(favfunct);
    });

    function favfunct(e) {
        // Stop the page from "following" the button (ie. submitting the form)
        e.preventDefault();
        e.stopPropagation();

        // Call an AJAX function to the proper page
        $.ajax("js/superheroes.php", {
            // Pass our data to the server
            data: { "get" : "runfunction", "action" : "favorites1" },
            // Pass using the appropriate method
            method: "POST",
            // When the request is completed and successful, run this code.
            success: function (response) {
            // Successfully added to favorites. JS code goes here for this condition.
                alert ("successfully loaded")
            }          
        });
    }
</script>
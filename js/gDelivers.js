document.addEventListener("DOMContentLoaded", function() {

    const TAX = 0.0825;
    const BURGER_PRICE = 8.99;
    const PIZZA_PRICE = 11.99;
    const ICECREAM_PRICE = 7.99;
    const SWINE_PRICE = 14.99;

    var subtotal = 0;
    var taxes = 0;
    var total = 0;

    $(".button-collapse").sideNav();


    $("#addburger").click(function() {
        $("#orderstable").append("<tr><td>Royale with Cheese</td><td>$" + BURGER_PRICE + "</td></tr>");
        updateTotals(BURGER_PRICE);



    });

    $("#addpizza").click(function() {
        $("#orderstable").append("<tr><td>Arugula Pie</td><td>$" + PIZZA_PRICE + "</td></tr>");
        updateTotals(PIZZA_PRICE);


    });

    $("#addicecream").click(function() {
        $("#orderstable").append("<tr><td>Ice Cream Biscut</td><td>$" + ICECREAM_PRICE + "</td></tr>");
        updateTotals(ICECREAM_PRICE);

    });

    $("#addswine").click(function() {
        $("#orderstable").append("<tr><td>Smoked Swine</td><td>$" + SWINE_PRICE + "</td></tr>");
        updateTotals(SWINE_PRICE);

    });

    $("#orderbtn").click(function() {
        //if #orderstable empty or input fields empty, toast validation message
        // Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast
    });

    function updateTotals(price) {
        subtotal += price;
        taxes += price * TAX;
        total = subtotal + taxes;

        $("#subtotal").text("$" + subtotal.toFixed(2));
        $("#tax").text("$" + taxes.toFixed(2));
        $("#total").text("$" + total.toFixed(2));

    }

});

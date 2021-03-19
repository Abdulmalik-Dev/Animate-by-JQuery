$(document).ready( function () {
    // To hide the elements from page
    $("p , input , label , button").hide()

    // To make slide of form in 1 second
    $("form").animate({
        "top":"100px",
    },1000)

    // To appear paragraph element
    $("p").fadeIn(8000);

    // To appear all inputs elements
    $("input").show(3000);

    // To appear all labels elements
    $("label").show(3500);

    // To appear login button 
    $("button").fadeIn(4000);
    
});

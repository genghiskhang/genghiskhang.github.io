function collapse(event) {
    if ($(".collapse").hasClass("close")) {
        $(".collapse").css("display", "block");
        $(".collapse").removeClass("close");
    }
    else {
        $(".collapse").css("display", "none");
        $(".collapse").addClass("close");
    }
    console.log($("#boop").css("display"));
}
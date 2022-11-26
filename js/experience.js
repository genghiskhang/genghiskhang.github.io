$(".experience-item").on("click", function() {
    $($(this).children()[1]).slideToggle();
    if ($($($(this).children()[0]).children()[1]).hasClass("flip")) {
        $($($(this).children()[0]).children()[1]).removeClass("flip");
    }
    else {
        $($($(this).children()[0]).children()[1]).addClass("flip");
    }
});
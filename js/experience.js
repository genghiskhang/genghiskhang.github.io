$(".experience-item").on("click", function() {
    if ($(this).find(".experience-body").hasClass("collapse")) {
        $(this).find(".experience-body").removeClass("collapse");
    }
    else {
        $(this).find(".experience-body").addClass("collapse");
    }
});
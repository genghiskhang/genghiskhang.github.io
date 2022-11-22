$(document).on("scroll", function() {
    var bottom = $(document).scrollTop() + $(window).height();
    var numSkills = $(".skills-item").length;

    for (var i = 0; i < numSkills; i++) {
        if (bottom >= $($(".skills-item").get(i)).offset().top + 50) {
            $($(".skills-item").get(i)).addClass("skills-item-fade");
        }
    }
});
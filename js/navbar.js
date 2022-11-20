$(document).on("scroll", function(event) {
    var top = document.documentElement.scrollTop;

    // console.log($(".navbar-link").get(0).id);

    // title
    if (top < $("#about").offset().top) {
        $(".navbar-link").get(0).id = "";
    }
    // about
    else if (top >= $("#about").offset().top && top < $("#experience").offset().top)  {
        $(".navbar-link").get(0).id = "active";
        $(".navbar-link").get(1).id = "";
    }
    // experience
    else if (top >= $("#experience").offset().top && top < $("#projects").offset().top) {
        $(".navbar-link").get(0).id = "";
        $(".navbar-link").get(1).id = "active";
        $(".navbar-link").get(2).id = "";
    }
    // projects
    else if (top >= $("#projects").offset().top && top < $("#skills").offset().top) {
        $(".navbar-link").get(1).id = "";
        $(".navbar-link").get(2).id = "active";
        $(".navbar-link").get(3).id = "";
    }
    // skills
    else if (top >= $("#skills").offset().top && top < $("#contact").offset().top) {
        $(".navbar-link").get(2).id = "";
        $(".navbar-link").get(3).id = "active";
        $(".navbar-link").get(4).id = "";
    }
    // contact
    else if (top >= $("#contact").offset().top) {
        $(".navbar-link").get(3).id = "";
        $(".navbar-link").get(4).id = "active";
    }
});
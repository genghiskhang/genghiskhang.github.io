$(document).on("scroll", function(event) {
    var top = document.documentElement.scrollTop;

    // console.log($(".navbar-link").get(0).id);

    // title
    if (top < $("#about").offset().top - 50) {
        $(".navbar-link").get(0).id = "";
    }
    // about
    else if (top >= $("#about").offset().top - 50 && top < $("#experience").offset().top - 50)  {
        $(".navbar-link").get(0).id = "active";
        $(".navbar-link").get(1).id = "";
    }
    // experience
    else if (top >= $("#experience").offset().top - 50 && top < $("#projects").offset().top - 50) {
        $(".navbar-link").get(0).id = "";
        $(".navbar-link").get(1).id = "active";
        $(".navbar-link").get(2).id = "";
    }
    // projects
    else if (top >= $("#projects").offset().top - 50 && top < $("#skills").offset().top - 50) {
        $(".navbar-link").get(1).id = "";
        $(".navbar-link").get(2).id = "active";
        $(".navbar-link").get(3).id = "";
    }
    // skills
    else if (top >= $("#skills").offset().top - 50 && top < $("#contact").offset().top - 50) {
        $(".navbar-link").get(2).id = "";
        $(".navbar-link").get(3).id = "active";
        $(".navbar-link").get(4).id = "";
    }
    // contact
    else if (top >= $("#contact").offset().top - 50) {
        $(".navbar-link").get(3).id = "";
        $(".navbar-link").get(4).id = "active";
    }
});
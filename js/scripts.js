// Spacing
$(document).ready(function() {
    var lastSection = $($("main").children()[$("main").children().length - 1]).css({"paddingBottom":"6rem"});
    console.log(lastSection);
});

// Navbar
function noNeg(number) {
    if (number < 0) {
        return 0;
    }
    return number;
}

$(document).on("scroll", function(event) {
    var top = $(document).scrollTop();
    var numSections = $(".section").length;

    if (numSections > 1) {
        for (var i = 0; i < numSections; i++) {
            if (top < $($(".section").get(0)).offset().top - 50) {
                $(".navbar-link").get(0).id = "";
            }
            else if (top >= $($(".section").get(noNeg(numSections - 1))).offset().top - 50) {
                $(".navbar-link").get(noNeg(numSections - 1)).id = "active";
                $(".navbar-link").get(noNeg(numSections - 2)).id = "";
            }
            else if (top >= $($(".section").get(i)).offset().top - 50 && top < $($(".section").get(i + 1)).offset().top - 50) {
                $(".navbar-link").get(noNeg(i - 1)).id = "";
                $(".navbar-link").get(i).id = "active";
                $(".navbar-link").get(i + 1).id = "";
            }
        }
    }
    else if (numSections == 1) {
        if (top < $($(".section").get(0)).offset().top - 5) {
            $(".navbar-link").get(0).id = "";
        }
        else {
            $(".navbar-link").get(0).id = "active";
        }
    }
});

// Experience
$(".experience-item").on("click", function() {
    var experienceItem = $($(this).children()[1]);
    var experienceItemArrow = $($($(this).children()[0]).children()[1]);
    
    experienceItem.slideToggle();
    experienceItemArrow.toggleClass("flip");
});

// Skills
$(document).on("scroll", function() {
    var bottom = $(document).scrollTop() + $(window).height();
    var numSkills = $(".skills-item").length;

    for (var i = 0; i < numSkills; i++) {
        if (bottom >= $($(".skills-item").get(i)).offset().top + 50) {
            $($(".skills-item").get(i)).addClass("skills-item-fade");
        }
    }
});
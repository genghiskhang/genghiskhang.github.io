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
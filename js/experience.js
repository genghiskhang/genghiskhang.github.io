$(".experience-item").on("click", function() {
    var experienceItem = $($(this).children()[1]);
    var experienceItemArrow = $($($(this).children()[0]).children()[1]);
    
    experienceItem.slideToggle();
    experienceItemArrow.toggleClass("flip");
});
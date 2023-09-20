// Call jquery function
$(document).ready(function() {
    // Manipulasi element yang mempunyai class card-content saat di hover dengan mouse akan play audio dan manilupasi css
    $(".card-content").hover(function() {
        $(this).css({
            "transform": "translateY(-10px)",
            "cursor": "pointer",
            "transition": "all 0.5s ease",
            "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)"
        });
        $(this).find("audio")[0].play();
        $(this).find("audio")[0].currentTime = 0;
        // Timpa class opacity-50 dengan opacity-100
        $(this).find(".opacity-50").removeClass("opacity-50").addClass("opacity-100");
    }
    , function() {
        $(this).css({
            "transform": "translateY(0)",
            "cursor": "default",
            "transition": "all 0.5s ease",
            "box-shadow": "none"
        });
        $(this).find("audio")[0].pause();
        $(this).find("audio")[0].currentTime = 0;
        // Timpakan class opacity-100 dengan opacity-50
        $(this).find(".opacity-100").removeClass("opacity-100").addClass("opacity-50");
    });
});

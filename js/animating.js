$(function() {
        $("#toMove").hover(
            function() {
                $(this).attr("src", "images/turbine.gif");
            },
            function() {
                $(this).attr("src", "images/turbine.png");
            }                         
        );                  
    });
$(document).ready(function(){
    $('#notalone').change(function(){
        if (this.checked) {
            $("#iaddpeople").show(500);
        } else {
            $("#iaddpeople").hide(500);
        }                   
    });
    
    
    
});
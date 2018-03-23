(function ( $ ) {
 'use strict'
    //var shade = "red";
    //var test = "bold";
    $.fn.inputstyle = function(options) {
        var settings = $.extend({
            placeholder : 'specify'
        }, options);
        return this.each( function(){
        //$(this).attr('placeholder', settings.placeholder ); 
        $(this).focusin(function() {
            $(this).attr("placeholder", settings.placeholder);      
        });
        $(this).focusout(function() {
            $(this).attr("placeholder", "");
        });
    });

};
}( jQuery ));
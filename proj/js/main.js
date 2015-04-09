"use strict";

var app = (function () {
	return {
        init: function () {
            this.setUpListeners();
        },
        setUpListeners: function () {
            $('.show').on('click', this.showMenu);
        },
        showMenu: function (e) {
            e.preventDefault();

            var nav = $('.nav'),
                    expression = parseInt( nav.css('top') );

            console.log(expression);

            if (expression) {
                nav.animate({
                    top: 0
                }, 300);
            } else {
                nav.animate({
                    top: -1*nav.height() + 'px'
                }, 300)
            }


        }
    }
})();

app.init();
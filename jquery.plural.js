/*
 * jquery.plural.js - jQuery plugin with extremely simple plural form implementation
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
define("jquery.hold", ["jquery"], function($) {

    "use strict";

    $.hold = function(number, titles) {
        return titles[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]];
    };
});

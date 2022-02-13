"use strict";
var Points = /** @class */ (function () {
    function Points(element) {
        this.element = element;
        this.points = 0;
        console.log(this.points);
    }
    ;
    Points.prototype.editheadline = function () {
        this.points += 1;
        console.log(this.points);
        var text = '.';
        for (var i = 0; i < this.points % 3; i++) {
            text += '.';
        }
        console.log(text);
        this.element.innerHTML = text + 'dick';
    };
    Points.prototype.start = function () {
        var _this = this;
        this.points = 0;
        this.timer = setInterval(function () { return _this.editheadline(); }, 500);
    };
    return Points;
}());
window.onload = function () {
    console.log('Script start');
    var el = document.getElementById("app");
    var dick = new Points(el);
    dick.start();
};
//# sourceMappingURL=app.js.map
(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let pi = Math.PI
            let area = pi * (this.radius**2)
            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                console.log(Math.round(this.getArea()))
            } else 
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    
    circle.logInfo(false)
    
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

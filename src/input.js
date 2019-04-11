var _inputHandler = null;
var triangle = true;
var down = false;

/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */
    constructor(canvas, scene) {
      this.canvas = canvas;
      this.scene = scene;

      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev) };
      this.canvas.onmousemove = function(ev) { _inputHandler.move(ev) };
      this.canvas.onmouseup = function(ev) { _inputHandler.release(ev) };
    }

    /**
     * Function called upon mouse click.
     * Draws a shape.
     */
    click(ev) {
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);

        down = true;

        // Passes in mouse position to shapes
        if(triangle == true && document.getElementById("tri").innerHTML == "true") {
            var shape = new Triangle(shader,ev.clientX, ev.clientY);
            this.scene.addGeometry(shape);
            console.log("draw a triangle");
        } 
        else if(document.getElementById("sqr").innerHTML == "true") {
            var shape = new Square(shader,ev.clientX, ev.clientY);
            this.scene.addGeometry(shape);
            console.log("draw a square");
        } else if(document.getElementById("cir").innerHTML == "true"){
            var shape = new Circle(shader,ev.clientX, ev.clientY);
            this.scene.addGeometry(shape);
            console.log("draw a circle " + document.getElementById("segment").value);
        }
    }

    /**
     * Function called upon mouse up.
     * Sets var (mouse) down to false. 
     */
    release(ev) {
        down = false;
    }

    /**
     * Function that draws shapes when mouse is down and moving
     */
     move(ev) {
        if(down == true) {
            if(triangle == true && document.getElementById("tri").innerHTML == "true") {
                var shape = new Triangle(shader,ev.clientX, ev.clientY);
                this.scene.addGeometry(shape);
            } 
            else if(document.getElementById("sqr").innerHTML == "true") {
                var shape = new Square(shader,ev.clientX, ev.clientY);
                this.scene.addGeometry(shape);
            } else if(document.getElementById("cir").innerHTML == "true"){
                var shape = new Circle(shader,ev.clientX, ev.clientY);
                this.scene.addGeometry(shape);
            }
         }
     }
}

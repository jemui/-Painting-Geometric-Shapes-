var _inputHandler = null;
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
  //    this.canvas.onmousemove = function(ev) { _inputHandler.move(ev)  };
    }

    /**
     * Function called upon mouse click.
     */
    click(ev) {
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);

        // Passes in mouse position to shape
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
     * Function called upon mouse down and movement.
     */
     move(ev) {
        var down = false;
      //  document.addEventListener("mousedown", mouseDown(this.scene));
        document.addEventListener("mouseup", mouseUp);

        this.canvas.onmousedown = mouseDown(this.scene) ;

        function mouseDown(scene) {
          //  down = true;
            if(document.getElementById("tri").innerHTML == "true") {
                var shape = new Triangle(shader,ev.clientX, ev.clientY);
                scene.addGeometry(shape);
                console.log("draw a triangle");
            } 
        }

        function mouseUp() {
            down = false;
          //  console.log(down);
        }


        // this.canvas.onmousedown = function(ev) { move = true;
        //     console.log(move);
        // };
      //  this.canvas.onmouseup = function(ev) { move = false; };
       // console.log(move);
     }
}

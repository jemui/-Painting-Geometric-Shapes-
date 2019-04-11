/**
 * Specifies a Circle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Circle}
 */
class Circle extends Geometry {
  /**
   * Constructor for Circle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Circle} Circle created
   */
  constructor(shader,x,y) {
      super(shader,x,y);

      this.vertices = this.generateCircleVertices();
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCircleVertices() {
      var vertices = []

      //  document.getElementById("segment").value gets segments
      var numVert =  document.getElementById("segment").value;
      var doublePI = 2*Math.PI;

      var x = (this.x/canvas.width)*2-1;
      var y = (this.y/canvas.height)*-2+1;

      var r = 0.25;

      console.log("circle x: " +x);
      //var center = new Vertex(x,y,0.0);
      var center = new Vertex(x,y,0.0);
      vertices.push(center);

      var delta = 2*Math.PI / 32;
    //   for (var theta = 0; theta <= 100; theta++) {
    //       var xpos = new Vertex(center + r*Math.cos(doublePI/200), (center + r*Math.sin(doublePI/200)),0.0); 
    //       vertices.push(xpos);
    //   }

      for(var theta = 0; theta < 2*Math.PI; theta+= delta) {
        //  var xpos = new Vertex(r*(Math.cos(doublePI/32)+x, r*Math.sin(doublePI/32)+y, 0.0));
          var xpos = new Vertex (0.25 * Math.cos(theta) + x, 0.25 * Math.sin(theta) + y, 0);
           // 0.25 = width, 0.15 = temp center;

          vertices.push(xpos);
       
       }
      // mouseX and mouseY
    //   var vertex1 = new Vertex(-0.25, -0.25, 0.0);
    //   var vertex2 = new Vertex( 0.25, -0.25, 0.0);
    //   var vertex3 = new Vertex( 0.0,   0.25, 0.0);

    //   vertices.push(vertex1);
    //   vertices.push(vertex2);
    //   vertices.push(vertex3);

      return vertices;
  }
}

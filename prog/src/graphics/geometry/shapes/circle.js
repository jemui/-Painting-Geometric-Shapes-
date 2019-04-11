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

  // a circle consists of triangles 
  generateCircleVertices() {
      var vertices = []
      var numVert = document.getElementById("segment").value;

      // Convert to gl coordinates 
      var x = (this.x/canvas.width)*2-1;
      var y = (this.y/canvas.height)*-2+1;
      var z = 0.0;

      console.log(numVert);
      var r = document.getElementById("size").value/15;
      var p = 6*Math.PI;

      var delta = (2*Math.PI) / numVert;
      var center = new Vertex(x, y, 0.0);

      // Draw circle
      for(var theta = 0; theta < p; theta+= delta) {
         vertices.push(center);

         var x2 = (Math.cos(theta)*r)+x;
         var y2 = (Math.sin(theta)*r)+y;
         vertices.push( new Vertex(x2, y2,z));
      }
      return vertices;
  }
}

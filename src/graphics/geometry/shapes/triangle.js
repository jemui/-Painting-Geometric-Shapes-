/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, x, y) {
      super(shader,x,y);

      this.vertices = this.generateTriangleVertices();
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices() {
      var vertices = []

      // convert to gl coordinates
      var x = (this.x/canvas.width)*2-1;
      var y = (this.y/canvas.height)*-2+1;

      // size
      var size = document.getElementById("size").value/15;

      var vertex1 = new Vertex( x-size, y-size, 0.0);
      var vertex2 = new Vertex( x+size, y-size, 0.0);
      var vertex3 = new Vertex( x     , y+size, 0.0);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      return vertices;
  }
}
function normalize(x,y,z) {
    var vec = []; 
    var norm = Math.sqrt((x*x)+(y*y)+(z*z));

    vec.push(x/norm);
    vec.push(y/norm);
    vec.push(z/norm);

    return vec;
}
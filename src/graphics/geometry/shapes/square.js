/**
 * Specifies a Square. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Square}
 */
class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Square} Square created
   */
  constructor(shader,x,y) {
      super(shader,x,y);

      this.vertices = this.generateSquareVertices();
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices() {
      var vertices = []

      var x = (this.x/canvas.width)*2-1;
      var y = (this.y/canvas.height)*-2+1;
      // mouseX and mouseY
      // replace 0.25 with shapesize
      var vertex1 = new Vertex( x+0.25, y+0.25, 0.0);
      var vertex2 = new Vertex( x-0.25, y+0.25 , 0.0);
      var vertex3 = new Vertex( x-0.25, y-0.25, 0.0);
      var vertex4 = new Vertex( x-0.25, y-0.25, 0.0);
      var vertex5 = new Vertex( x+0.25, y-0.25, 0.0);
      var vertex6 = new Vertex( x+0.25, y+0.25, 0.0);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);

      return vertices;
  }
}

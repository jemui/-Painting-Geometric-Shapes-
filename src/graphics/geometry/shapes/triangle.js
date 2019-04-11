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

      // mouseX and mouseY

      // need to normalize (this.x, this.y, 0)
      // this.x needs to be neg
     // var norm = normalize(this.x, this.y, 0);

    //   var vertex1 = new Vertex(-norm[0]/2, -norm[1]/2, norm[2]/2); //left 
    //   var vertex2 = new Vertex( norm[0]/2, -norm[1]/2, norm[2]/2); //right
    //   var vertex3 = new Vertex( 0.0,  norm[1], norm[2]); //top 

    //  console.log(norm[0] + " " + norm[1] + " " + norm[2]);

      // convert to gl coordinates

     // console.log("midx,midy: " + (this.x-midX)/midX + " " + (this.y-midY)/midY);
      var x = (this.x/canvas.width)*2-1;
      var y = (this.y/canvas.height)*-2+1;

      console.log(x + " " + y);
      // issue: shape drawn is stretched to mouse pos
      // issue with just y now. midpt should be x/2?
      
      //size
      var vertex1 = new Vertex( x-0.25, y-0.25, 0.0);
      var vertex2 = new Vertex( x+0.25, y-0.25, 0.0);
      var vertex3 = new Vertex( x, y+0.25, 0.0);

    //   var vertex1 = new Vertex(-0.25, -0.25, 0.0);
    //   var vertex2 = new Vertex( 0.25, -0.25, 0.0);
    //   var vertex3 = new Vertex( 0.0,   0.25, 0.0);

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
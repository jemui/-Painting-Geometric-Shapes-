/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z) {
      this.point  = new Vector3([x, y, z]);
     // console.log("vertex: " + x + ", " + y + ", " + z);
      this.color  = [1.0, 0.0, 0.0, 1.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}

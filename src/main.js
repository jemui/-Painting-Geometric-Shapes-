var shader = null;
var triangle = true;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene);

  // Initialize shader
  shader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);

  // 3 major variable types in glsl
  // - attributes int
  // - uniforms
  // - varyings

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();
}

function clear() {
  document.getElementById("clear").addEventListener("click", clearCanvas);

  function clearCanvas() {
    
    renderer.render();
    console.log("clear");
   // console.log("triangle: " + triangle + " square: " + square + " circle: " + circle);
    //var gl = getWebGLContext(canvas);
    //gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }
}

function shape() {
  document.getElementById("square").addEventListener("click", square);
  document.getElementById("triangle").addEventListener("click", triangle);
  document.getElementById("circle").addEventListener("click", circle);

  function square() {
    document.getElementById("sqr").innerHTML = "true";
    document.getElementById("tri").innerHTML = "false";
    document.getElementById("cir").innerHTML = "false";
    console.log("square");
   // console.log("triangle: " + triangle + " square: " + square + " circle: " + circle);
  }

  function triangle() {
    document.getElementById("sqr").innerHTML = "false";
    document.getElementById("tri").innerHTML = "true";
    document.getElementById("cir").innerHTML = "false";
    console.log("triangle");
   // console.log("triangle: " + triangle + " square: " + square + " circle: " + circle);
  }

  function circle() {
    document.getElementById("sqr").innerHTML = "false";
    document.getElementById("tri").innerHTML = "false";
    document.getElementById("cir").innerHTML = "true";
    console.log("circle");
  //    console.log("triangle: " + triangle + " square: " + square + " circle: " + circle);
  }

}
var shader = null;

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
    main();
  }
}

function shape() {
  // Event listeners for buttons
  document.getElementById("square").addEventListener("click", square);
  document.getElementById("triangle").addEventListener("click", triangle);
  document.getElementById("circle").addEventListener("click", circle);

  // Select square
  function square() {
    document.getElementById("sqr").innerHTML = "true";
    document.getElementById("tri").innerHTML = "false";
    document.getElementById("cir").innerHTML = "false";
  }

  // Select triangle
  function triangle() {
    document.getElementById("sqr").innerHTML = "false";
    document.getElementById("tri").innerHTML = "true";
    document.getElementById("cir").innerHTML = "false";
  }

  // Select circle
  function circle() {
    document.getElementById("sqr").innerHTML = "false";
    document.getElementById("tri").innerHTML = "false";
    document.getElementById("cir").innerHTML = "true";
  }
}
// matter.js
import Matter from "matter-js";
import $ from "jquery";
export function runMatter(canvas) {
  var dimensions = {
    width: $(window).width(),
    height: $(window).height(),
  };

  Matter.use("matter-attractors");
  Matter.use("matter-wrap");

  var Engine = Matter.Engine,
    Events = Matter.Events,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    Common = Matter.Common,
    Bodies = Matter.Bodies;

  var engine = Engine.create();
  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  var render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: "transparent",
    },
  });

  var runner = Runner.create();
  var world = engine.world;
  var attractiveBody = Bodies.circle(
    render.options.width / 2,
    render.options.height / 2,
    50,
    {
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          },
        ],
      },
    }
  );

  World.add(world, attractiveBody);

  for (let i = 0; i < 60; i++) {
    let x = Common.random(0, render.options.width);
    let y = Common.random(0, render.options.height);
    let body = Bodies.circle(x, y, Common.random(5, 20), {
      frictionAir: 0.02,
      render: { fillStyle: "#222222" },
    });
    World.add(world, body);
  }

  var mouse = Mouse.create(render.canvas);
  Events.on(engine, "afterUpdate", function () {
    if (!mouse.position.x) return;
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12,
    });
  });

  Runner.run(runner, engine);
  Render.run(render);

  return { engine, render, runner };
}

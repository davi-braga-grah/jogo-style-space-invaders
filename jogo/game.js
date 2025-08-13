
const { Engine, Runner, Bodies, World, Body, Events, Render } = Matter;

const canvas = document.getElementById("game");
const sprite_player = canvas.getContext("2d");

const engine = Engine.create();
const world = engine.world;

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false 
    }
});
Render.run(render);

const runner = Runner.create();
Runner.run(runner, engine);

const player = Bodies.rectangle(400, 200, 50, 50, { restitution: 0, label: "player" });

world.add(world, [player])

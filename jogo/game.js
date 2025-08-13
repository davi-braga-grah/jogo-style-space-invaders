const { Engine, Runner, Bodies, World, Body, Events, Render } = Matter;

const canvas = document.getElementById("game");
const sprite_player = canvas.getContext("2d");

const keys = {};

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
    (function draw() {
        sprite_player.clearRect(0, 0, canvas.width, canvas.height);

        sprite_player.fillStyle = "blue";
        sprite_player.fillRect(player.position.x - 25, player.position.y - 25, 50, 50);

        requestAnimationFrame(draw);
})();

// foi ou nao clicada
document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// update aplicar movent
Events.on(engine, "beforeUpdate", () => {
    if (keys["a"]) {
        Body.setVelocity(player, { x: -5, y: player.velocity.y })
    }
    if (keys["d"]) {
        Body.setVelocity(player, { x: 5, y: player.velocity.y })
    }
})
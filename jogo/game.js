const { Engine, Runner, Bodies, World, Body, Events } = Matter;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const engine = Engine.create();
const world = engine.world;

// Iniciar motor
const runner = Runner.create();
Runner.run(runner, engine);
engine.world.gravity.y = 0;
//engine.world.gravity.x = 0;


// jugador
var force = 3;
const player = Bodies.rectangle(640, 360, 100, 100, {
    friction: 0.5,
});
World.add(world, [player]);

// Movimiento horizontal
const keys = {};
document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

Events.on(engine, "beforeUpdate", () => {
    if (keys["a"] || keys["ArrowLeft"]) Body.setPosition(player, { x: player.position.x - force, y: player.position.y });
    if (keys["d"] || keys["ArrowRight"]) Body.setPosition(player, { x: player.position.x + force, y: player.position.y });
    if (keys["w"] || keys["ArrowUp"]) Body.setPosition(player, { x: player.position.x, y: player.position.y - force });
    if (keys["s"] || keys["ArrowDown"]) Body.setPosition(player, { x: player.position.x, y: player.position.y + force });
});

// Dibujar
(function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(player.position.x - 50, player.position.y - 50, 100, 100);
    requestAnimationFrame(draw);
})();
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

//Wait till the browser is ready to render the game (avoids glitches)
var global_game = null;
window.requestAnimationFrame(function () {
    global_game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

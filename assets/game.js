let Game = {
    _display: null,
    _currentScreen: null,
    init(){
        //any necessary initializations will go here,
        this._display = new ROT.Display({
            width : 80, 
            height : 24
        });
        var game = this; //so we don't lose this
        let bindEventToScreen = (event) => {
            window.addEventListener (event, (e) => {
                //when event is received, send it to the
                //screen if there is one
                if (game._currentScreen !== null) {
                    game._currentScreen.handleInput(event, e);
                }
            });
        }
        //bind keyboard input events
        bindEventToScreen('keydown');
        bindEventToScreen('keyup');
        bindEventToScreen('keypress');
    },
    getDisplay() {
        return this._display;
    },
    switchScreen(screen) {
        if (this._currentScreen != null) {
            this._currentScreen.exit();
        }
        //clear the display
        this.getDisplay().clear();
        //update our current screen, notify if we entered and then render
        this._currentScreen = screen;
        if (!this._currentScreen !== null) {
            this._currentScreen.enter();
            this._currentScreen.render(this._display);
        }
    }
}




window.onload = () => {
    if (!ROT.isSupported()) {
        alert ("The rot.js library isn't supported by your browser.");
    } else {
        Game.init();
        //add the container to our html page
        document.body.appendChild(Game.getDisplay().getContainer());
        //load the start screen
        Game.switchScreen(Game.Screen.startScreen);       
    }
}

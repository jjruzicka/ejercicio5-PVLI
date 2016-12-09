var GameOver = {
    create: function () {
        console.log("Game Over");
        var button = this.game.add.button(400, 200, 
                                          'button', 
                                          this.actionOnClick, 
                                          this, 2, 1, 0);
        button.anchor.set(0.5);
       
        var button2 = this.game.add.button(400, 300, 
                                          'button', 
                                          this.actionOnClick2, 
                                          this, 2, 1, 0);

        button2.anchor.set(0.5);

        var goText = this.game.add.text(400, 100, "GameOver");
        var text = this.game.add.text(0, 0, "Reset Game");
        var text2 = this.game.add.text(0, 0, "MENU");
        text.anchor.set(0.5);
        goText.anchor.set(0.5);
        button.addChild(text);
        text2.anchor.set(0.5);
        button2.addChild(text2);
        
        //TODO 8 crear un boton con el texto 'Return Main Menu' que nos devuelva al menu del juego.
    },
    
    //TODO 7 declarar el callback del boton.
    actionOnClick: function(){
        this.game.state.start('play');
    },

    actionOnClick2: function(){
        this.game.state.start('menu');
    }
};

module.exports = GameOver;
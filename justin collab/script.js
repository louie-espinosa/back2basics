//Object Oriented Programming: A class is a blueprint for the objects you will be creating. These objects or instances of the class will share a particular blueprint; however, have their own unique uses
class AudioController{
    constructor(){
        this.bgMusic = new Audio('assets/audio/horror-sci-fi-wind-tunnel-894.wav');
        this.flipSound = new Audio('assets/audio/horror-trailer-long-sweep-561.wav');
        this.matchSound = new Audio('assets/audio/sweep-of-darkness-2630.wav');
        this.victorySound = new Audio('asstes/audio-swish-1495.wav');
        this.gameOverSound = new Audio('assets/audio/terror-transition-2484.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic(){
        this.bgMusic.play();
    }
    stopMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip(){
        this.flipSound.play();
    }
    match(){
        this.matchSound.play();
    }
    victory(){
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver(){
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MixOrMatch{
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
    startGame(){
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }

    ongoingGame(){
        setTimeout(function (){
        this.AudioController.startMusic();
        this.shuffleCards();
        this.countDown = this.startCountDown();
        this.busy = false;
    }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    

    hideCards()
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    

    flipCard(card);
        if (this.canFlipCard(card)) {
            this.AudioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if(this.cardToCheck)
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    

    checkForCardMatch(card);
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck); 

            this.cardToCheck = null;
    

    cardMatch(card1, card2);
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length)
        this.victory();
        //change Set number
        //document.getElementById('sets').innerText++;
        //this.sets++;
    

    cardMisMatch(card1, card2);
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    

    function getCardType(card){
        return card.getElementsByClassName('card-value')[0].src;
    }

    function startCountDown(){
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
                if(this.timeRemaining === 0)
                    this.gameOver();
        }, 1000);
    }

    gameOver()
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    

    victory()
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    

    shuffleCards()
        for(let i = this.cardsArray.length - 1; i > 0; i--){
            let randIndex = Math.floor(Math.random()*(i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    

    canFlipCard(card)
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(documents.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(function(overlay) {
    //or overlays.forEach(overlay => { **ES6
        overlay.addEventListener('click',function() {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click',()=>{
            //game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
    }else{
        ready();
    }



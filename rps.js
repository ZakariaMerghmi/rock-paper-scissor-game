const game = ()=> {
    let pscore = 0;
    let cscore = 0;
    const startgame = ()=> {
        const playbtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playbtn.addEventListener('click' , ()=>{
            introscreen.classList.add('inactive');
            match.classList.add('active');

        });
    };
    const playmatch = ()=> {
        document.addEventListener('DOMContentLoaded', () => {
            const playeroptions = document.querySelectorAll('.options button');
            const playerhand = document.querySelector('.playerhand');
            const computerhand = document.querySelector('.computerhand');
            const computeroptions = ['rock' , 'paper' , 'scissors'];
            playeroptions.forEach( playeroption => {
                playeroption.addEventListener('click', function() {
                    const computerNumbers = Math.floor(Math.random() * 3);
                    const computerChoice = computeroptions[computerNumbers];
                    compare(computerChoice , this.textContent);
                    playerhand.src = this.textContent + '.png'; // Make sure 'this' refers to the clicked element
                    computerhand.src = computerChoice + '.png';
                    
                });
                });
                
            });
            
            const compare = (computerChoice, playerChoice) => {
                const winner = document.querySelector('.winner');
                const pscoregame = document.querySelector('.player p')
                const cscoregame = document.querySelector('.computer p')
                if (!winner) {
                    console.error('Winner element not found');
                    return;
                }
            
                if (computerChoice === playerChoice) {
                    winner.textContent = "It's a draw!";
                    return;
                } 
            
                if (playerChoice === 'rock') {
                    if (computerChoice === 'paper') {
                        winner.textContent = 'Computer wins';
                        cscore++;
                        cscoregame.textContent = cscore;

                    } else {
                        winner.textContent = 'Player wins';
                        pscore++;
                        pscoregame.textContent = pscore;
                    }
                } else if (playerChoice === 'paper') {
                    if (computerChoice === 'rock') {
                        winner.textContent = 'Player wins';
                        pscore++;
                        pscoregame.textContent = pscore;
                    } else {
                        winner.textContent = 'Computer wins';
                        cscore++;
                        cscoregame.textContent = cscore;
                    }
                } else if (playerChoice === 'scissors') { // Corrected 'scissore' to 'scissors'
                    if (computerChoice === 'rock') {
                        winner.textContent = 'Computer wins';
                        cscore++;
                        cscoregame.textContent = cscore;
                    } else {
                        winner.textContent = 'Player wins';
                        pscore++;
                        pscoregame.textContent = pscore;
                    }
                } else {
                    console.error('Invalid player choice');
                }
            };
            
     };
    
    startgame();
    playmatch();
    
}
game();
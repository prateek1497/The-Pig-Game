/* 

Game Description is given below  :::::

-The game has 2 players;;
-In each turn player rolls a dice as many times as he wishes. Each result gets added to his round score.
-But, if a player rolls a 1 all his score gets lost. After that its next player turn.
-The players can choose to hold, which means hisround score gets added to his global score...aftre that next player turen
-The first player to reach 100 points wins;;


@author --Prateek Awasthi


*/

// start writing the code;;;


var currentscore,globalScore,activePlayer,gamePlay=true;

inti();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlay)
    {
            // This will create a number between 1 and 6;;
            var dice=Math.floor(Math.random()*6)+1;  
            // Style is a css command so this is actually used to set display to block;;
            document.querySelector('.dice').style.display = 'block';  
            // This will select the images of all dices given as dice-0,dice-1,dice-2... show it to this dice class;;;
            document.querySelector('.dice').src = 'dice-' + dice + '.png';
    
            if(dice!=1)
            {
                // This will update the currentscore 
                currentscore = currentscore + dice;
                // This will show that current score on place of that current in html
                document.querySelector('#current-' + activePlayer).textContent = currentscore;
            }
            else
            {
                // change the active player
        
        
                currentscore=0;
                document.querySelector('#current-' + activePlayer).textContent = currentscore;
        
                activePlayer === 0 ? activePlayer = 1 : activePlayer=0;
                // Below statements will toggle the active player means toggling that red dot that comes in the site;;
                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');
        
            }
    
    
    }
    
    
    
    
});

// working of hold button starts here;;;

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlay)
    {
             // if you click the hold button your current score will be added to your inital global score;;
             globalScore[activePlayer]+=currentscore;
             // The below statement will show that updated global score of that curremtly active player;;;
             document.querySelector('#score-' + activePlayer).textContent=globalScore[activePlayer];
    
            if(globalScore[activePlayer]>=10)
            {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.querySelector('.dice').style.display = 'none';
                
                    // since game is over we have to remive allthe active and winner classes;;;;;;;
                    document.querySelector('.player-' + 0 + '-panel').classList.remove('winner');
                    document.querySelector('.player-' + 1 + '-panel').classList.remove('winner');
                    document.querySelector('.player-' + 0 + '-panel').classList.remove('active');
                    document.querySelector('.player-' + 1 + '-panel').classList.remove('active');
                    document.querySelector('.player-' + 0 + '-panel').classList.remove('active');
                    document.querySelector('.player-' + 1 + '-panel').classList.remove('active');
                    // set the gameplay to false means game khatam ho chuki hai ;;;;;;
                    gamePlay=false;
            
            }
            else
                {
                    // the global score did not exceeded the requried score;;
                    // so we set current score as 0 and display it;;
                    currentscore=0;
                    document.querySelector('#current-' + activePlayer).textContent=0;


                    // hold krne pe toggling honi chahiye;;;

                    activePlayer === 0 ? activePlayer=1 : activePlayer=0;
                    // used for toggling the active player;;
                    document.querySelector('.player-0-panel').classList.toggle('active');
                    document.querySelector('.player-1-panel').classList.toggle('active');
                }
            
    
    
                
    }
   
   

});


document.querySelector('.btn-new').addEventListener('click',inti);


function inti()
{
    currentscore = 0;
    globalScore =  [0,0];
    activePlayer=0;
    // below 5 statements set the current score , global score to 0 and also your dice won`t show up now;;;;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-0').textContent=0;
    // Typical css function to not to show the dice;;;;
    document.querySelector('.dice').style.display = 'none';
    
    
    // removing the active and winner classes.....
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    // we first remove this active class so that adding this class would not worry as..
    // means we won`t add a active class over a active class 
    // so we first remove that class and add that class again;;;;
    document.querySelector('.player-0-panel').classList.add('active');
    // Set the name of players again as once the winner is declared we changed the name so 
    // when we presss the new button we actually reset the names of players
    // Players names takes are just for fun;;;
    document.querySelector('#name-0').textContent='Bill Gates';
    document.querySelector('#name-1').textContent='Elon Musk';
    
    // Again setting te gameplay to true as we started the new game..;;;
    gamePlay=true;
}




 
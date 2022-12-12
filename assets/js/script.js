document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit');
            } else {
                let gameType = this.getAttribute("data-type");
                checkAnswer();
            
            }
        })
    }

    runGame('addition');

});

function runGame(gameType) {

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType) === 'addition'{
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;  // throws an error, stops the game from running

    }
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer()  {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`; // throws an error
    }

}




function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}


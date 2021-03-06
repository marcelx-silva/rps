const options = ["scissor", "rock", "paper"];

const roundNumber = document.getElementById("round");
let round = parseInt(roundNumber.value)

const score_youNumber = document.querySelector("#score-you");
let score_you = parseInt(score_youNumber.value);

const score_machineNumber = document.querySelector("#score-machine");
let score_machine = parseInt(score_machineNumber.value);


const rps = document.querySelectorAll(".rps");
let playerSelection;
let machineSelection;

rps.forEach((rps) => {
    rps.addEventListener('click', () => {
        playerSelection = rps.id;
        cleanRoundPick();
        winRound(playerSelection, machinePlay());

        if (score_youNumber.value == 5) {
            showGameWinner(1);
            resetGame();
        } else if (score_machineNumber.value == 5) {
            showGameWinner(0);
            resetGame();
        } else {
            nextRound();
        }


    })
})


function machinePlay() {
    return options[~~(Math.random() * options.length)];
}

function addScore(winner) {

    if (winner) {
        score_you += 1;
        score_youNumber.value = score_you;
        return score_you;
    }

    score_machine += 1;
    score_machineNumber.value = score_machine;
    return score_machine;
}

function nextRound() {
    round += 1;
    roundNumber.value = round;
}

function winRound(pSelection, mSelection) {

    showRoundPick(pSelection, mSelection)

    let player = 1;
    let machine = 0;

    if (pSelection === "scissor") {

        if (mSelection === "rock") {
            addScore(machine);

        } else if (mSelection === "paper") {
            addScore(player)
        } else {

        }

        console.log(pSelection);
        console.log(mSelection);

        return;
    }

    if (pSelection === "rock") {

        if (mSelection === "paper") {
            addScore(machine);

        } else if (mSelection === "scissor") {
            addScore(player)
        } else {

        }

        console.log(pSelection);
        console.log(mSelection);

        return;
    }

    if (pSelection === "paper") {

        if (mSelection === "scissor") {
            addScore(machine);

        } else if (mSelection === "rock") {
            addScore(player)
        } else {

        }

        console.log(pSelection);
        console.log(mSelection);

        return;
    }

}

function resetGame() {
    score_machine = 0;
    score_you = 0;
    round = 0;

    score_machineNumber.value = score_machine;
    score_youNumber.value = score_you;
    roundNumber.value = round;
}

function showRoundPick(pSelection, mSelection) {

    const divYou = document.querySelector("#you-choice");
    const divMachine = document.querySelector("#machine-choice");

    const playerPick = document.createElement("img");
    playerPick.setAttribute("src", "./style/images/left-" + pSelection + ".png");
    playerPick.setAttribute("alt", pSelection);

    const machinePick = document.createElement("img");
    machinePick.setAttribute("src", "./style/images/" + mSelection + ".png")
    machinePick.setAttribute("alt", pSelection);

    divYou.appendChild(playerPick);
    divMachine.appendChild(machinePick);


}

function cleanRoundPick() {

    const divYou = document.querySelector("#you-choice");
    const divMachine = document.querySelector("#machine-choice");

    if (divYou.hasChildNodes()) {
        divYou.removeChild(divYou.firstElementChild);
        divMachine.removeChild(divMachine.firstElementChild);
    }

    return;
}

function showRoundWinner(winner) {

    if (winner) {
        const divYou = document.querySelector("#you-choice");
        divYou.setAttribute("border", "red");
    }

    const divMachine = document.querySelector("#machine-choice");


}


const modal_container = document.getElementById("modal-container").classList;
const modal_title = document.querySelector(".modal-title").classList;
const close = document.getElementById("close-modal");
let modalTitle = document.querySelector(".modal-title");
let modalText = document.querySelector(".modal-text");

function showGameWinner(winner) {



    if (winner) {
        modalTitle.textContent = "Vit??ria !"
        modalText.textContent = "Parab??ns pela vit??ria! Obrigado por jogar :)."
        modal_title.add("victory-title");
    } else {
        modalTitle.textContent = "Derrota !"
        modalText.textContent = "N??o foi dessa vez, tente novamente! Obrigado por jogar :)."
        modal_title.add("defeat-title");
    }


    modal_container.add("show");

    return;
}

close.addEventListener('click', resetModal);


function resetModal() {
    if (modalTitle.hasAttribute("victory-title")) {
        modal_title.remove("victory-title");
    } else {
        modal_title.remove("defeat-title");
    }
    modal_container.remove("show");
}
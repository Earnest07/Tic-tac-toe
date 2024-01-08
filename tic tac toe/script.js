let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    resetBtn.disabled = false;
    msgContainer.classList.add("hide");
}

boxes.forEach((e)=>{
    e.addEventListener("click", ()=>{
        // if(e.classList.contains('occupied')) return false;
        // e.innerHTML = turnO ? "O" : "X";
        // e.classList.add("occupied");
        // checkWin();
        // turnO = !turnO;

        if(turnO === true){
            e.innerText = "O";
            turnO = !turnO;
        }
        else{
            e.innerText = "X";
            turnO = !turnO;
        }
        e.disabled = true;
        checkWin();
    });
});

const checkWin = ()=>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

const disableBoxes = ()=>{
    for(let e of boxes){
        e.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let e of boxes){
        e.disabled = false;
        e.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations !! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("show"); 
    disableBoxes();
    resetBtn.disabled = true;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
let boxes=document.querySelectorAll(".box");
let stat=document.querySelector("#status");
let reset=document.querySelector("#resetBtn");

let turnO=true;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((val)=>{
val.addEventListener("click",()=>{
    
    if(turnO){
      val.innerText="O"; 
      val.classList.add("o-color");
      turnO=false; 
      stat.innerText= "Player X's Turn";
    }

    else{
        val.innerText="X";
        val.classList.add("x-color");
        turnO=true; 
        stat.innerText="Player O's Turn";   
    }
    val.disabled= true;
    checkWinner();
});
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
    if(pos1Val===pos2Val && pos1Val===pos3Val){
        console.log("Winner is Player",pos1Val);
        stat.innerText="Congratulations! Winner is Player "+pos1Val;
        reset.innerText="New Game";
        disable();
    }
}
}
let draw = true;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerText === "") {
            draw = false;
            break;
        }
    }
    if (draw==true) {
        stat.innerText="No Winner !";
        reset.innerHTML="New Game";
    }
};

const disable=()=>{
    boxes.forEach((val)=>{
        val.disabled=true;
});
};

const enable=()=>{
    boxes.forEach((val)=>{
        val.disabled=false;
        val.innerText=""; 
        val.classList.remove("x-color","o-color");
        reset.innerText="Reset Game";
});
        stat.innerText="Player O's Turn";  
        turnO=true;
};

reset.addEventListener("click",()=>{
    boxes.forEach((val)=>{
    enable();
});
});

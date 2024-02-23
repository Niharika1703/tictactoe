let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
turnO = true
const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
       
        if(turnO){
            box.innerText = "O";
            turnO = false
        }
        else{
            box.innerText = "X" 
            turnO = true
        }
        box.disabled= true
        console.log("clicked")
        checkWinner();
    })
})
const resetgame =()=>{
    turnO = true;
    enablebox();
    msgcontainer.classList.add("hide")

}
const enablebox =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const disablebox =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner =(winner) =>{
    msg.innerText= `CONGRATULATIONS , Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disablebox();
}
 const checkWinner=()=>{
    for(let pattern of winpattern){
        let posVal1 = boxes[pattern[0]].innerHTML;
        let posVal2 = boxes[pattern[1]].innerHTML;
        let posVal3 = boxes[pattern[2]].innerHTML;
       if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
        if(posVal1 === posVal2 && posVal2 === posVal3){
            // console.log("winner",posVal1)
            showWinner(posVal1)
        }
       }
    }

}
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgameBtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-cont"); 
let msg = document.querySelector("#msg");
 

let turnO = true; //player O and x
 const winPatten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

 ];

 

 const resetgame = () => {
    turnO = true;
    enableBox();
    msgcont.classList.add("hide");

 }
 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.classList.add("O");
            turnO = false;
            
        } else {
            box.innerText = "X";
            box.classList.add("X");
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
 });
 
 const disablebtn = () =>{
   for(let box of boxes){
    box.disabled = true;
   }
 }
 
 const enableBox = () =>{
   for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("O", "X");
   }
 }
 const showWinner = (winner) => {
    msg.innerText = `🎉🎉🎊Conguretulation 🎉🎉🎊 winner is : ${winner}`;
    msgcont.classList.remove("hide"); 
    disablebtn();
};

 const checkWin  = () =>{
   for(pattern of winPatten){
     let post1val = boxes[pattern[0]].innerText;
     let post2val = boxes[pattern[1]].innerText;
     let post3val = boxes[pattern[2]].innerText;
     if(post1val != "" && post2val != "" && post3val != ""){
        if(post1val === post2val && post2val === post3val){
            console.log("winner",post1val);
            showWinner(post1val);
        };
     }

   }
 };


 newgameBtn.addEventListener("click", resetgame);
 resetbtn.addEventListener("click", resetgame);
 
 
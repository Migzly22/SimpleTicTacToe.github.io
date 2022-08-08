var gamebox = [
    ["","",""],
    ["","",""],
    ["","",""]
]
var playersturn = true;
var gameover = false;
var player1val = "red";
var player2val = "blue";
var notifsection = document.getElementById('notifsection');
//click event game board

var gameboardid = document.querySelector('#gameboardid');
gameboardid.addEventListener('click', (e)=>{
    if (e.target.id != "gameboardid" && !gameover && !vsai) {
        let boxcolor = playersturn  ? player1val : player2val;
        let boxval = playersturn  ? "red" : "blue";
        let targerid = e.target.id;
        let targetbox = document.getElementById(targerid);
        let arrid = targerid.split("_");

        if (targetbox == null) {return true;}// kung meron nang laman d na pwede lagyan

        targetbox.style.backgroundColor = boxcolor;
        targetbox.style.borderWidth = "0px";
        targetbox.setAttribute('disabled','');
        gameboard(arrid[1],arrid[2],boxval);
/*
if (element.disabled) {
  console.log('✅ element is disabled');
} else {
  console.log('⛔️ element is not disabled');
}
// ✅ Set the disabled attribute
button.setAttribute('disabled', '');

// ✅ Remove the disabled attribute
button.removeAttribute('disabled');
*/
    }
})

function horizontalcheck(letter){
    var count = 0;
    for (let i = 0; i < gamebox.length; i++) {
        for (let j = 0; j < gamebox.length; j++) {
            if (gamebox[i][j] == letter) {
                count++;
            }
            if (count == 3) {
                return true;
            }
        }
        count = 0;
    }
    return false;
}

function verticalcheck(letter){
    var count = 0;
    for (let i = 0; i < gamebox.length; i++) {
        for (let j = 0; j < gamebox.length; j++) {
            if (gamebox[j][i] == letter) {
                count++;
            }
            if (count == 3) {
                return true;
            }
        }
        count = 0;
    }
    return false;
}
function diagonalcheck(letter) {
    if (gamebox[0][0] == letter && gamebox[1][1] == letter && gamebox[2][2] == letter) {
        return true;
    }
    if (gamebox[2][0] == letter && gamebox[1][1] == letter && gamebox[0][2] == letter) {
        return true;
    }
    return false;
}
function isdraw(){
    var count = 0;
    for (let i = 0; i < gamebox.length; i++) {
        for (let j = 0; j < gamebox.length; j++) {
            if (gamebox[i][j] == "") {
                count++;
            }
        } 
    }
    return count;
}

function gameboard(coord1,coord2, sign) {
    gamebox[coord1][coord2] = sign;

    if (horizontalcheck(sign) || verticalcheck(sign) || diagonalcheck(sign)) {
        gameover = true;
        notifsection.innerHTML = sign.toUpperCase() + " Wins";
    }
    if (isdraw() == 0) {
        gameover = true;
        notifsection.innerHTML = "Draw";
    }
    playersturn = !playersturn;
}


//reset and go back button
var buttonreset = document.querySelector('#buttonreset');
buttonreset.addEventListener('click',(e)=>{
    let vsPlayer = document.getElementById('thegame')
    let menu = document.getElementById('menu');

    if (e.target.id == 'goback') {
        vsPlayer.style.display = "none";
        menu.style.display = "block";
        vsai = true;
        reset();
    }
    if (e.target.id == 'reset'){
        reset();
    }
})
//reset function
function reset(){
    playersturn = true;
    gameover = false;
    notifsection.innerHTML = "Let the game begins";
//removing disable attribute
    gameboardid.b_0_0.removeAttribute('disabled');
    gameboardid.b_0_1.removeAttribute('disabled');
    gameboardid.b_0_2.removeAttribute('disabled');
    gameboardid.b_1_0.removeAttribute('disabled');
    gameboardid.b_1_1.removeAttribute('disabled');
    gameboardid.b_1_2.removeAttribute('disabled');
    gameboardid.b_2_0.removeAttribute('disabled');
    gameboardid.b_2_1.removeAttribute('disabled');
    gameboardid.b_2_2.removeAttribute('disabled');
//removing the style attribute in every id
    gameboardid.b_0_0.removeAttribute('style');
    gameboardid.b_0_1.removeAttribute('style');
    gameboardid.b_0_2.removeAttribute('style');
    gameboardid.b_1_0.removeAttribute('style');
    gameboardid.b_1_1.removeAttribute('style');
    gameboardid.b_1_2.removeAttribute('style');
    gameboardid.b_2_0.removeAttribute('style');
    gameboardid.b_2_1.removeAttribute('style');
    gameboardid.b_2_2.removeAttribute('style');
//reset the box
    gamebox = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
}


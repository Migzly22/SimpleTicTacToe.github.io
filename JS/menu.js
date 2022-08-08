var vsai = "";
let menucontainer = document.querySelector('#menucontainer');
menucontainer.addEventListener('click',(e)=>{
    e.preventDefault();

    let vsPlayer = document.getElementById('thegame')
    let menu = document.getElementById('menu');
    
    if (e.target.id == "vsPlayer") {
        vsPlayer.style.display = "block";
        menu.style.display = "none";
        vsai = false;
    }
    if (e.target.id == "vsAi") {
        vsPlayer.style.display = "block";
        menu.style.display = "none";
        vsai = true;
    }
})

audio = new Audio('Ping Sound Effect - Discord.mp3')
audio.loop = false;
snakeaudio = new Audio('Among Us (Role Reveal) - Sound Effect (HD).mp3')
snakeaudio.loop = false
ladderaud = new Audio('Mario Jump Sound Effect.mp3')
ladderaud.loop = false

const snakes = [25,34,47,65,87,91,99]
const snakeTail = [5,1,19,52,57,61,69]
const ladders = [3,6,20,36,63,68]
const ladderDest = [51,27,70,55,95,98]
function OKOK(x) {
    const a = document.getElementById(x);
    var ok = a.style.left
    console.log(ok)
    /*currp = a.style.left
    console.log(currp)
    np = Number(currp.substring(0,currp.length-2))
    console.log(np);
    np+= 60
    a.style.top = '690px'
    a.style.left = np+'px'*/
}
function init(x)
{
    const a = document.getElementById(x);
    console.log(a.style.top);
    currp = a.style.left
    console.log(currp)
    
}
function bd()
{
    const a = document.getElementById('blob')
    const b = document.getElementById('blob2')
    a.style.top = '750px'
    b.style.top = '750px'
    a.style.left = '420px'
    b.style.left = '420px'
    //init('blob');
}

function MOVE(x)
{
    const a = document.getElementById(x);
    var moves = RollDice()
    if (x=="blob") {
        alert("Dice Roll by Player 1: "+moves)
    }
    else
    {
        alert("Dice Roll by Player 2: "+moves)
    }
    isvalid = 100-xytoint(a.style.left,a.style.top)-moves
    if (isvalid<0) {
        return;
    }       
    var ok = a.style.top
    console.log(ok)
    //alert(currt)
    while(moves--){
        currp = a.style.left
        currt = a.style.top
        if (currp=="1050px") {

            tmp = Number(currt.substring(0,currt.length-2))
            tmp-=70

            a.style.top = tmp+'px'
            a.style.left = '420px'    
        }
        else
        {
            console.log(currp)
            np = Number(currp.substring(0,currp.length-2))
            console.log(np);
            np+= 70
            //a.style.top = '750px'
            a.style.left = np+'px'
        }
    }
    audio.play()
    

}

function RollDice()
{
    return Math.ceil(Math.random()*(6));
}

function unlockB(x,y)
{
    const a = document.getElementById(x)
    const b = document.getElementById(y)
    a.disabled = false
    b.disabled = true
}
function getCor(x)
{
    return [420+70*((x-1)%10)+"px",750-70*(Math.floor((x-1)/10))+"px"]
}
function checkSL(player)
{
    
    const a = document.getElementById(player)
    if (xytoint(a.style.left,a.style.top)===100) {
        document.getElementById('blob').disabled = true
        document.getElementById('blob2').disabled = true
        alert("Game over!")
        window.location.href = "gameover.html";
    }
    tmp = [a.style.left,a.style.top]
    for (let i = 0; i < snakes.length; i++) {
        if (tmp[0]===getCor(snakes[i])[0] && tmp[1]===getCor(snakes[i])[1]) {
            alert("You were bitten by a snake")
            snakeaudio.play()
            dest = getCor(snakeTail[i])
            a.style.left = dest[0]
            a.style.top = dest[1]
            return;
        }
    }
    for (let i = 0; i < ladders.length; i++) {
        if (tmp[0]===getCor(ladders[i])[0] && tmp[1]===getCor(ladders[i])[1]) {
            alert("A Ladder!")
            ladderaud.play()
            dest = getCor(ladderDest[i])
            a.style.left = dest[0]
            a.style.top = dest[1]
            return;
        }
    }

}
//everything is 80px wide
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function xytoint(x,y) {
    tmp = Number(x.substring(0,x.length-2))
    tmp2 = Number(y.substring(0,y.length-2))
    return Math.floor((tmp-420)/70)+1 + Math.floor((750-tmp2)/7)
}
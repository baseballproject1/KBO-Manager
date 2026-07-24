
// ======================
// 메인 게임 시스템
// ======================


// 내 선수단

window.myRoster = [];


// 경기 기록

let win = 0;
let lose = 0;



// ======================
// 팀 선택
// ======================

function startGame(){


if(!myTeam){

alert(
"팀을 먼저 선택하세요!"
);

return;

}


alert(
`
${myTeam.fullName}

시즌 시작!
`
);


saveGame();

}




// ======================
// 경기 시스템
// ======================


function playGame(){



if(myRoster.length < 9){

alert(
"선수가 부족합니다!"
);

return;

}




let myPower = 0;


myRoster
.slice(0,9)
.forEach(player=>{


myPower +=
player.stats.ability;


});





let enemyPower =
Math.floor(
Math.random()*900
)+400;





if(myPower >= enemyPower){


win++;


let reward = 20;


let money =
parseInt(
document.getElementById("money").innerText
);



money += reward;



document.getElementById("money")
.innerText =
money+"억";



alert(
`
⚾ 승리!

승리 보상
💰 ${reward}억

전적:
${win}승 ${lose}패
`
);



}

else{


lose++;


alert(

`
⚾ 패배

전적:
${win}승 ${lose}패

`

);


}



saveGame();


}




// ======================
// 라인업 표시
// ======================


function showRoster(){


let area =
document.getElementById("players");



area.innerHTML="";



myRoster.forEach(player=>{


area.innerHTML +=

`

<div class="card ${player.card}">


<h3>
${player.name}
</h3>


<p>
${player.team}
</p>


<p>
${player.position}
</p>


<p>
${player.grade}
</p>


</div>

`;


});


}



// ======================
// 게임 시작
// ======================

function initGame(){


loadGame();


showRoster();


}



initGame();


// ======================
// 경기 시뮬레이션 시스템
// ======================


function playMatch(){


if(
lineup.starter.length < 1 ||
lineup.batter.length < 1
){

alert(
"라인업을 먼저 완성하세요!"
);

return;

}



// ======================
// 우리 팀 전력 계산
// ======================


let attack = 0;


lineup.batter.forEach(player=>{

attack +=
player.stats.contact +
player.stats.power +
player.stats.ability;

});



let defense = 0;


lineup.starter.forEach(player=>{

defense +=
player.stats.ability +
player.stats.defense;

});


lineup.bullpen.forEach(player=>{

defense +=
player.stats.ability;

});




let myPower =
attack + defense;




// ======================
// 상대팀 생성
// ======================


let enemyPower =
Math.floor(
Math.random()*1500
)+1500;



// ======================
// 경기 결과
// ======================


let myScore =
Math.floor(
Math.random()*10
);


let enemyScore =
Math.floor(
Math.random()*10
);



if(myPower > enemyPower){

myScore +=2;

}

else{

enemyScore +=2;

}





// ======================
// MVP
// ======================


let mvp =

lineup.batter[

Math.floor(
Math.random()*
lineup.batter.length
)

];





// ======================
// 결과 출력
// ======================


if(myScore > enemyScore){


win++;


giveReward({
money:30
});


alert(

`
⚾ 경기 종료

승리!

${myScore}
:
${enemyScore}


🏆 MVP
${mvp.name}


💰 승리 보상 30억

전적
${win}승 ${lose}패

`

);


}


else{


lose++;


alert(

`
⚾ 경기 종료

패배

${myScore}
:
${enemyScore}


전적
${win}승 ${lose}패

`

);


}



saveGame();


}

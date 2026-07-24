// ======================
// 레전드 제작 시스템
// ======================


const LEGEND_COST = 150;


// 레전드 제작

function makeLegend(){


if(!window.myRoster ||
myRoster.length===0){

alert("보유 선수가 없습니다!");
return;

}



let target =
prompt(
"레전드를 만들 선수 이름 입력"
);



let players =
myRoster.filter(
p=>p.name===target
);



if(players.length===0){

alert(
"해당 선수가 없습니다!"
);

return;

}



// 재료 확인

let signature =
players.filter(
p=>p.card==="signature"
).length;



let team =
players[0].team;



let gold =
myRoster.filter(
p=>
p.team===team &&
p.card==="gold" &&
p.name===target
).length;



let s =
myRoster.filter(
p=>
p.team===team &&
p.card==="s" &&
p.name===target
).length;



if(signature<1){

alert(
"해당 선수 시그니처 카드가 필요합니다."
);

return;

}



if(gold<2){

alert(
"해당 선수 골든글러브 카드 2장이 필요합니다."
);

return;

}



if(s<5){

alert(
"해당 선수 S등급 카드 5장이 필요합니다."
);

return;

}



// 돈 확인

let money =
parseInt(
document.getElementById("money")
.innerText
);



if(money < LEGEND_COST){

alert(
"돈이 부족합니다!"
);

return;

}



// 재료 제거

let removeCount=0;


myRoster =
myRoster.filter(p=>{


if(
p.name===target &&
p.card==="signature" &&
removeCount<1
){

removeCount++;
return false;

}


return true;


});



// 골드 제거

let goldRemove=0;


myRoster =
myRoster.filter(p=>{


if(
p.name===target &&
p.card==="gold" &&
goldRemove<2
){

goldRemove++;
return false;

}


return true;


});



// S 제거

let sRemove=0;


myRoster =
myRoster.filter(p=>{


if(
p.name===target &&
p.card==="s" &&
sRemove<5
){

sRemove++;
return false;

}


return true;


});




// 레전드 생성


let legendCard = {

name:target,

team:team,

position:players[0].position,

grade:"레전드",

card:"legend",

level:1,

enhance:0,


traits:[
"전설의 선수"
],


stats:{

contact:
players[0].stats.contact+10,

power:
players[0].stats.power+10,

speed:
players[0].stats.speed+5,

defense:
players[0].stats.defense+10,

ability:
99

}

};



myRoster.push(
legendCard
);



// 돈 차감

money -= LEGEND_COST;



document.getElementById("money")
.innerText =
money+"억";



alert(
`
👑 레전드 제작 성공!

${target}
레전드 카드 획득!
`
);



saveGame();


}

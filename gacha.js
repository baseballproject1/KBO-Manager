// ======================
// 선수 영입 시스템
// ======================


// 뽑기 확률
// 레전드는 제작으로만 획득

const gachaRate = [

{
card:"normal",
rate:60
},

{
card:"a",
rate:20
},

{
card:"s",
rate:10
},

{
card:"gold",
rate:6
},

{
card:"signature",
rate:4
}

];



// ======================
// 등급 결정
// ======================

function randomCard(){

let random =
Math.random()*100;


let total = 0;


for(let item of gachaRate){

total += item.rate;


if(random <= total){

return item.card;

}

}


return "normal";

}



// ======================
// 선수 영입
// ======================

function openGacha(){


let cost = 10; 
// 선수 영입 비용 10억



let money =
parseInt(
document.getElementById("money").innerText
);



if(money < cost){

alert(
"💰 자금이 부족합니다!"
);

return;

}



// 돈 차감

money -= cost;


document.getElementById("money").innerText =
money+"억";




// 카드 등급 결정

let card =
randomCard();





// ⭐ 모든 구단 선수 등장

let pool =
players.filter(
p =>
p.card === card
);





if(pool.length === 0){

alert(
"해당 등급 선수가 없습니다."
);

return;

}




// 랜덤 선수 선택

let player =

JSON.parse(

JSON.stringify(

pool[
Math.floor(
Math.random()*pool.length
)
]

)

);





// 보유 선수 생성

if(!window.myRoster){

window.myRoster=[];

}




myRoster.push(player);





// 카드 표시

displayCard(player);




// 저장

saveGame();





alert(

`
🎉 선수 영입 성공!

${player.team}
${player.name}

등급 : ${player.grade}

`

);


}





// ======================
// 카드 표시
// ======================

function displayCard(player){


let area =
document.getElementById("players");



area.innerHTML +=

`

<div class="card ${player.card}">

<h3>
${player.name}
</h3>


<p>
팀 : ${player.team}
</p>


<p>
포지션 : ${player.position}
</p>


<p>
등급 : ${player.grade}
</p>


<p>
특성 :
${player.traits.join(",")}
</p>


<p>
능력 :
${player.stats.ability}
</p>


</div>

`;

}

let money = 150;
let ticket = 30;


let players = [

{
name:"최정",
grade:"레전드",
position:"3B",
enhance:5
},

{
name:"박성한",
grade:"A",
position:"SS",
enhance:3
}

];


// 뽑기 선수 목록

let pool=[

{
name:"김성현",
grade:"일반",
position:"2B"
},

{
name:"추신수",
grade:"A",
position:"OF"
},

{
name:"김광현",
grade:"S",
position:"SP"
}

];



// 상태 업데이트

function update(){

document.getElementById("money").innerHTML=money;

document.getElementById("ticket").innerHTML=ticket;

}



// 선수단 화면

function showTeam(){

let html="<h2>👥 선수단</h2>";


players.forEach((p,i)=>{


let css="normal";


if(p.grade=="A") css="a";

if(p.grade=="S") css="s";

if(p.grade=="레전드") css="legend";


html+=`

<div class="card ${css}">

<h3>${p.name}</h3>

<p>${p.grade}</p>

<p>포지션 : ${p.position}</p>

<p>강화 +${p.enhance}</p>


<button onclick="enhance(${i})">
🔧 강화
</button>


</div>

`;

});


document.getElementById("screen").innerHTML=html;

}



// 일반 뽑기

function draw(){


if(ticket<=0){

alert("뽑기권이 없습니다.");

return;

}


ticket--;


let r=Math.random()*100;


let grade;


if(r<75){

grade="일반";

}

else if(r<95){

grade="A";

}

else{

grade="S";

}



let list=pool.filter(
p=>p.grade==grade
);



if(list.length==0){

alert("획득 가능한 선수가 없습니다.");

update();

return;

}



let player=
list[Math.floor(Math.random()*list.length)];



players.push({

name:player.name,

grade:player.grade,

position:player.position,

enhance:0

});



alert(
"🎴 카드 등장!\n\n"+
player.grade+
"\n"+
player.name+
" 획득!"
);


update();

}



// 강화 시스템

function enhance(i){


let p=players[i];


if(p.enhance>=10){

alert("최대 강화입니다.");

return;

}



let chance=[90,85,70,50,45,30,25,20,15,10];


let rate=chance[p.enhance];


let result=Math.random()*100;



if(result<rate){

p.enhance++;

alert(
"🎉 강화 성공!\n"+
"+"
+p.enhance
);


}

else{


if(p.enhance>0){

p.enhance--;

}


alert("😢 강화 실패!");

}


showTeam();

}




// 경기 화면

function showGame(){


document.getElementById("screen").innerHTML=

`

<h2>🏟 리그 경기</h2>


<p>플레이 방식 선택</p>


<button onclick="playGame('자동')">
⚡ 자동
</button>


<button onclick="playGame('공격')">
🏏 공격만
</button>


<button onclick="playGame('수비')">
🧤 수비만
</button>


<button onclick="playGame('전체')">
🔥 전체
</button>


`;

}



// 경기 진행

function playGame(mode){


let chance=50;



if(mode=="공격")
chance+=5;


if(mode=="수비")
chance+=5;


if(mode=="전체")
chance+=10;



let win=Math.random()*100 < chance;



if(win){


let reward=10;



if(mode=="공격"||mode=="수비")
reward+=1;


if(mode=="전체")
reward+=3;



ticket+=reward;


alert(
"🏆 승리!\n\n"+
"일반 뽑기권 "+
reward+
"장 획득"
);


}

else{


ticket+=3;


alert(
"😢 패배!\n\n"+
"일반 뽑기권 3장 획득"
);


}


update();

}



// 저장

function saveGame(){


let save={

money:money,

ticket:ticket,

players:players

};


localStorage.setItem(
"KBO_Manager_Save",
JSON.stringify(save)
);


alert("💾 저장 완료!");

}


// 시즌 데이터

let seasonStage = 1;



// 시즌 화면

function showSeason(){

document.getElementById("screen").innerHTML=`

<h2>🏆 시즌 모드</h2>

<p>
현재 단계 :
${seasonStage}/50
</p>


<p>
AI 전력 :
${seasonStage*10}
</p>


<button onclick="playSeason()">
경기 시작
</button>

`;

}



// 시즌 경기

function playSeason(){


let aiPower = seasonStage * 2;


let teamPower = players.length * 10;



let winChance =
50 + (teamPower - aiPower);



if(winChance>90)
winChance=90;


if(winChance<10)
winChance=10;



let win =
Math.random()*100 < winChance;



if(win){


let reward =
seasonStage * 10;


money += reward;


alert(
"🏆 시즌 승리!\n\n"+
reward+
"억 획득"
);



if(seasonStage<50){

seasonStage++;

}


}

else{


let reward =
seasonStage * 5;


money += reward;


alert(
"😢 시즌 패배\n\n"+
reward+
"억 획득"
);


}



update();

showSeason();

}

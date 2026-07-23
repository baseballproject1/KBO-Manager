// 경기 화면

function showGame(){

document.getElementById("screen").innerHTML=`

<h2>🏟️ 리그 경기</h2>

<p>플레이 방식을 선택하세요.</p>


<button onclick="playGame('자동')">
⚡ 자동 진행
</button>


<button onclick="playGame('공격만')">
🏏 공격만
</button>


<button onclick="playGame('수비만')">
🧤 수비만
</button>


<button onclick="playGame('전체')">
🔥 전체 플레이
</button>

`;

}



// 경기 진행

function playGame(mode){


let winChance=50;


// 방식별 보너스

if(mode=="공격만"){
winChance+=5;
}


if(mode=="수비만"){
winChance+=5;
}


if(mode=="전체"){
winChance+=10;
}



// 승패 결정

let win =
Math.random()*100 < winChance;



if(win){


let reward=10;


// 추가 보상

if(mode=="공격만"){
reward+=1;
}

if(mode=="수비만"){
reward+=1;
}

if(mode=="전체"){
reward+=3;
}


ticket+=reward;


alert(
"🏆 승리!\n\n"+
"일반 뽑기권 "+
reward+
"장 획득!"
);


}

else{


ticket+=3;


alert(
"😢 패배\n\n"+
"일반 뽑기권 3장 획득!"
);


}


update();

}let money = 150;
let ticket = 30;


let players=[

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



let pool=[

{
name:"김성현",
grade:"일반",
position:"2B"
},

{
name:"박성한",
grade:"A",
position:"SS"
},

{
name:"김광현",
grade:"S",
position:"SP"
},

{
name:"최정",
grade:"골든글러브",
position:"3B"
}

];




// 선수단

function showTeam(){

let html="<h2>👥 선수단</h2>";


players.forEach((p,i)=>{

html+=`

<div class="card">

<h3>${p.name}</h3>

<p>${p.grade}</p>

<p>${p.position}</p>

<p>강화 +${p.enhance}</p>

<button onclick="enhance(${i})">
강화
</button>

</div>

`;

});


document.getElementById("screen").innerHTML=html;

}




// 일반 뽑기

function draw(){

if(ticket<=0){

alert("뽑기권 부족");

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

alert("획득 실패");

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
"🎉 획득!\n"+
player.grade+
"\n"+
player.name
);


update();

}




// 강화

function enhance(i){


let p=players[i];


let chance=[90,85,70,50,45,30,25,20,15,10];


let rate=chance[p.enhance];


if(Math.random()*100 < rate){

p.enhance++;

alert("강화 성공!");

}

else{

alert("강화 실패!");

}


showTeam();

}




function showEnhance(){

showTeam();

}



function update(){

document.getElementById("money").innerHTML=money;

document.getElementById("ticket").innerHTML=ticket;

}




// 저장

function saveGame(){

localStorage.setItem(
"KBOsave",
JSON.stringify(players)
);


alert("저장 완료!");

}

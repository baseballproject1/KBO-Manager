
// ======================
// 보상 시스템
// ======================


// 💰 보상 종류
// money : 자금
// ticket : 특성 변경권
// gacha : 선수 영입권


// ======================
// 일일 미션
// ======================

const dailyMissions = [

{
id:1,
name:"선수 영입 1회",
condition:"gacha",
count:1,
reward:{
money:20
}
},

{
id:2,
name:"경기 3회 플레이",
condition:"game",
count:3,
reward:{
money:30
}
},

{
id:3,
name:"선수 강화 5회",
condition:"enhance",
count:5,
reward:{
ticket:1
}
},

{
id:4,
name:"선수 카드 확인",
condition:"check",
count:1,
reward:{
money:10
}
}

];




// ======================
// 주간 미션
// ======================

const weeklyMissions = [

{
id:1,
name:"경기 20회 플레이",
condition:"game",
count:20,
reward:{
money:100
}
},


{
id:2,
name:"선수 영입 10회",
condition:"gacha",
count:10,
reward:{
ticket:3
}
},


{
id:3,
name:"S등급 이상 선수 획득",
condition:"highCard",
count:1,
reward:{
money:150
}
},


{
id:4,
name:"강화 30회 성공",
condition:"enhance",
count:30,
reward:{
ticket:5
}
}

];




// ======================
// 업적
// ======================

const achievements = [

{
id:1,
name:"첫 선수 영입",
condition:"gacha",
count:1,
reward:{
money:50
}
},


{
id:2,
name:"선수 50명 보유",
condition:"roster",
count:50,
reward:{
ticket:5
}
},


{
id:3,
name:"시그니처 선수 획득",
condition:"signature",
count:1,
reward:{
money:300
}
},


{
id:4,
name:"레전드 제작 성공",
condition:"legend",
count:1,
reward:{
ticket:10
}
}

];




// ======================
// 30일 출석 보상
// ======================

const attendanceRewards = [

{day:1,reward:{money:10}},
{day:2,reward:{money:20}},
{day:3,reward:{ticket:1}},
{day:4,reward:{money:30}},
{day:5,reward:{gacha:1}},

{day:6,reward:{money:40}},
{day:7,reward:{ticket:2}},

{day:8,reward:{money:50}},
{day:9,reward:{gacha:1}},
{day:10,reward:{ticket:2}},

{day:11,reward:{money:60}},
{day:12,reward:{money:70}},
{day:13,reward:{ticket:3}},
{day:14,reward:{gacha:2}},

{day:15,reward:{money:100}},

{day:16,reward:{money:80}},
{day:17,reward:{ticket:3}},
{day:18,reward:{money:90}},
{day:19,reward:{gacha:2}},
{day:20,reward:{ticket:5}},

{day:21,reward:{money:120}},
{day:22,reward:{money:130}},
{day:23,reward:{ticket:5}},
{day:24,reward:{gacha:3}},
{day:25,reward:{money:150}},

{day:26,reward:{ticket:5}},
{day:27,reward:{money:200}},
{day:28,reward:{gacha:5}},
{day:29,reward:{ticket:10}},
{day:30,reward:{money:500}}

];




// ======================
// 보상 지급 함수
// ======================

function giveReward(reward){


let money =
parseInt(
document.getElementById("money").innerText
);



if(reward.money){

money += reward.money;

document.getElementById("money")
.innerText =
money+"억";

}



if(reward.ticket){

traitChangeTicket += reward.ticket;

}



saveGame();


}

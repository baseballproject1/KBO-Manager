// ==========================
// KBO 매니저
// teams.js
// 구단 데이터
// ==========================


const teams = [

{
id:"SSG",
name:"SSG 랜더스",
color:"#e60012",
power:90,
money:150
},

{
id:"LG",
name:"LG 트윈스",
color:"#c9003d",
power:92,
money:150
},

{
id:"삼성",
name:"삼성 라이온즈",
color:"#005bac",
power:88,
money:150
},

{
id:"두산",
name:"두산 베어스",
color:"#131230",
power:87,
money:150
},

{
id:"KIA",
name:"KIA 타이거즈",
color:"#ea0029",
power:91,
money:150
},

{
id:"KT",
name:"KT 위즈",
color:"#000000",
power:89,
money:150
},

{
id:"롯데",
name:"롯데 자이언츠",
color:"#041e42",
power:85,
money:150
},

{
id:"한화",
name:"한화 이글스",
color:"#ff6600",
power:86,
money:150
},

{
id:"키움",
name:"키움 히어로즈",
color:"#570514",
power:84,
money:150
},

{
id:"NC",
name:"NC 다이노스",
color:"#315288",
power:88,
money:150
}

];


// 선택한 팀 저장용
let selectedTeam = null;


// 팀 찾기

function getTeam(id){

return teams.find(
team => team.id === id
);

}

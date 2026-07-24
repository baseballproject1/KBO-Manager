
// ======================
// 팀 데이터
// ======================

const teams = [

{
name:"SSG",
fullName:"SSG 랜더스",
stadium:"인천 SSG 랜더스필드"
},

{
name:"삼성",
fullName:"삼성 라이온즈",
stadium:"대구 삼성 라이온즈 파크"
},

{
name:"두산",
fullName:"두산 베어스",
stadium:"잠실야구장"
},

{
name:"KIA",
fullName:"KIA 타이거즈",
stadium:"광주-기아 챔피언스 필드"
},

{
name:"KT",
fullName:"KT 위즈",
stadium:"수원 KT 위즈파크"
},

{
name:"롯데",
fullName:"롯데 자이언츠",
stadium:"사직야구장"
},

{
name:"LG",
fullName:"LG 트윈스",
stadium:"잠실야구장"
},

{
name:"한화",
fullName:"한화 이글스",
stadium:"대전 한화생명 볼파크"
},

{
name:"키움",
fullName:"키움 히어로즈",
stadium:"고척 스카이돔"
},

{
name:"NC",
fullName:"NC 다이노스",
stadium:"창원NC파크"
}

];


// 선택 팀

let myTeam = null;


function selectTeam(){

let value =
document.getElementById("teamList").value;


myTeam = teams.find(
team => team.name === value
);


document.getElementById("myTeam").innerHTML =
`
${myTeam.fullName}<br>
🏟 ${myTeam.stadium}
`;

saveGame();

}

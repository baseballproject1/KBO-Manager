
// ======================
// 저장 시스템
// ======================


function saveGame(){

let data = {

team:myTeam,

money:
document.getElementById("money").innerText,


roster:
window.myRoster || [],


date:
new Date()

};


localStorage.setItem(
"baseballSave",
JSON.stringify(data)
);


console.log("저장 완료");

}





function loadGame(){


let data =
localStorage.getItem(
"baseballSave"
);



if(!data)
return;



data =
JSON.parse(data);



myTeam =
data.team;



window.myRoster =
data.roster || [];



if(myTeam){

document.getElementById("myTeam").innerHTML =
`
${myTeam.fullName}<br>
🏟 ${myTeam.stadium}
`;

}



document.getElementById("money").innerText =
data.money || "100억";



console.log("불러오기 완료");


}





// 게임 시작 시 자동 불러오기

window.onload=function(){

loadGame();

}

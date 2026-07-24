
// ======================
// 라인업 시스템
// ======================


window.lineup = {

starter:[],   // 선발 5명

bullpen:[],   // 불펜 8명

batter:[]     // 야수 13명

};



// ======================
// 선수 등록
// ======================


function addLineup(){


let index =
prompt(
"등록할 선수 번호 입력"
);



let player =
myRoster[index];



if(!player){

alert(
"선수가 없습니다!"
);

return;

}





// 투수

if(
player.position==="SP" ||
player.position==="RP"
){



if(
player.position==="SP" &&
lineup.starter.length<5
){

lineup.starter.push(player);

}


else if(
lineup.bullpen.length<8
){

lineup.bullpen.push(player);

}


else{

alert(
"투수 자리가 가득 찼습니다."
);

}


}





// 야수

else{


if(lineup.batter.length<13){

lineup.batter.push(player);

}

else{

alert(
"야수 자리가 가득 찼습니다."
);

}


}



saveGame();


showLineup();


}




// ======================
// 라인업 표시
// ======================


function showLineup(){


console.log(
"선발",
lineup.starter
);


console.log(
"불펜",
lineup.bullpen
);


console.log(
"야수",
lineup.batter
);



alert(

`
⚾ 1군 라인업

선발:
${lineup.starter.length}/5

불펜:
${lineup.bullpen.length}/8

야수:
${lineup.batter.length}/13

`

);


}



// ======================
// 라인업 초기화
// ======================


function resetLineup(){


lineup.starter=[];

lineup.bullpen=[];

lineup.batter=[];


saveGame();


alert(
"라인업 초기화 완료"
);


}

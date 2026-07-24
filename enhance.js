
// ======================
// 선수 강화 시스템
// ======================


// 강화 비용

const enhanceCost = {

1:10,
2:20,
3:30,
4:50,
5:80,
6:120,
7:180,
8:250,
9:350,
10:500

};



// 강화 확률

const enhanceRate = {

1:90,
2:85,
3:80,
4:70,
5:60,
6:50,
7:40,
8:30,
9:20,
10:10

};




// ======================
// 강화 실행
// ======================


function enhancePlayer(){



if(!myRoster ||
myRoster.length===0){

alert(
"강화할 선수가 없습니다!"
);

return;

}





let index =
prompt(
"강화할 선수 번호 입력\n(0부터 시작)"
);



let player =
myRoster[index];



if(!player){

alert(
"선수가 없습니다."
);

return;

}





let level =
player.enhance || 0;



if(level>=10){

alert(
"최대 강화입니다!"
);

return;

}





let next =
level+1;



let cost =
enhanceCost[next];





let money =
parseInt(
document.getElementById("money").innerText
);





if(money < cost){

alert(
"자금이 부족합니다!"
);

return;

}





money -= cost;



document.getElementById("money")
.innerText =
money+"억";






// 성공 판정

let random =
Math.random()*100;





if(random <= enhanceRate[next]){


player.enhance =
next;



// 능력 상승

player.stats.contact +=2;

player.stats.power +=2;

player.stats.speed +=1;

player.stats.defense +=2;

player.stats.ability +=3;



alert(

`
강화 성공!

${player.name}

+${next}

`

);


}



else{


alert(

`
강화 실패...

${player.name}

강화 유지

`

);


}





saveGame();


showRoster();


}

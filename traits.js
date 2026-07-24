// ======================
// 선수 특성 시스템
// ======================


const traitList = {

"거포":{
power:+10,
contact:-2
},

"정확한 타격":{
contact:+10
},

"빠른 발":{
speed:+10
},

"수비 장인":{
defense:+12
},

"클러치":{
ability:+10,
contact:+5
},

"강속구":{
ability:+12,
power:+5
},

"제구왕":{
ability:+10,
defense:+5
},

"변화구 장인":{
ability:+10,
defense:+3
},

"에이스 본능":{
ability:+15
},

"강심장":{
ability:+8,
power:+5
}

};



// ======================
// 특성 적용
// ======================


function applyTrait(player){


let trait =
traitList[player.traits[0]];



if(!trait)
return;



for(let stat in trait){

player.stats[stat] += trait[stat];

}



}



// ======================
// 특성 변경권
// ======================


let traitChangeTicket = 3;


// 특성 변경

function changeTrait(){


if(traitChangeTicket<=0){

alert(
"특성 변경권이 없습니다!"
);

return;

}



let player =
window.myRoster[
0
];



if(!player){

alert(
"선수가 없습니다!"
);

return;

}




let randomTrait =
Object.keys(traitList)
[
Math.floor(
Math.random()
*
Object.keys(traitList).length
)
];



player.traits=[
randomTrait
];



traitChangeTicket--;



alert(
`
${player.name}
특성 변경 완료!

새 특성:
${randomTrait}

남은 변경권:
${traitChangeTicket}
`
);



saveGame();


}

// ============================
// traitChange.js
// 특성 변경 시스템
// ============================


// 특성 목록

const traits = [

    "컨택 머신",
    "파워 히터",
    "스피드 스타",
    "수비 장인",
    "클러치 히터",
    "선구안",
    "에이스",
    "위기 관리",
    "철벽 수비",
    "승부사"

];





// 특성 변경

function changeTrait(index){


    let player =
    myRoster[index];



    if(!player){

        alert("선수가 없습니다.");
        return;

    }



    if(traitChangeTicket <= 0){

        alert(
        "특성 변경권이 없습니다."
        );

        return;

    }



    traitChangeTicket--;



    let oldTrait =
    player.trait;



    let newTrait;



    do{


        newTrait =
        traits[
        Math.floor(
        Math.random()
        *
        traits.length
        )
        ];



    }while(
        newTrait === oldTrait
    );




    player.trait =
    newTrait;




    alert(

    `
    🔄 특성 변경 완료!

    ${player.name}

    ${oldTrait}
    ↓
    ${newTrait}

    `

    );



    saveGame();

    updateUI();


}

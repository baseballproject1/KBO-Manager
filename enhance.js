// ============================
// enhance.js
// 강화 시스템
// ============================


// 강화 성공 확률
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


// 감소 가능한 능력치
const decreaseStats = [
    "contact",
    "power",
    "speed",
    "defense",
    "ability"
];



// 강화 함수
function enhancePlayer(index){


    let player = myRoster[index];


    if(!player){

        alert("선수가 없습니다.");
        return;

    }



    let level = player.enhance || 0;



    if(level >= 10){

        alert("최대 강화입니다.");
        return;

    }



    // 강화 비용
    let cost = level + 1;



    if(money < cost){

        alert(
            "자금이 부족합니다."
        );

        return;

    }



    // 돈 차감

    money -= cost;



    // 기본 성공 확률

    let successRate =
    enhanceRate[level + 1];



    // 강화권 적용

    if(
    typeof enhanceTicket !== "undefined" &&
    enhanceTicket > 0
    ){

        successRate += 10;

        enhanceTicket--;

    }



    // 고급 강화권 적용

    if(

    typeof advancedEnhance !== "undefined" &&
    advancedEnhance > 0 &&

    (
    player.grade === "signature" ||
    player.grade === "legend"
    )

    ){

        successRate = 100;

        advancedEnhance--;

    }



    // 성공 판정

    let random =
    Math.random()*100;



    if(random <= successRate){



        player.enhance =
        level + 1;



        // 강화 능력 상승

        player.stats.ability += 3;



        alert(

        `
        🔥 강화 성공!

        ${player.name}

        +${level}
        → +${player.enhance}

        `

        );



    }



    else{



        // 하락 방지권

        if(

        typeof protectTicket !== "undefined" &&
        protectTicket > 0

        ){


            protectTicket--;



            alert(

            `
            ❌ 강화 실패

            🛡 하락 방지권 사용

            강화 단계 유지

            `

            );


        }



        else{



            // 강화 단계 하락

            if(player.enhance > 0){

                player.enhance--;

            }



            // 랜덤 능력치 감소

            let stat =
            decreaseStats[
            Math.floor(
            Math.random()
            *
            decreaseStats.length
            )
            ];



            if(player.stats[stat] > 0){

                player.stats[stat]--;

            }



            alert(

            `
            ❌ 강화 실패

            강화 단계 하락!

            ${stat} -1 감소

            `

            );


        }


    }



    saveGame();

    updateUI();


}

// ============================
// gachaTicket.js
// 뽑기권 사용 시스템
// ============================



// 일반 뽑기권 사용

function useNormalGachaTicket(){


    if(inventory.normalGachaTicket <= 0){

        alert("일반 뽑기권이 없습니다.");
        return;

    }


    inventory.normalGachaTicket--;



    let grade =
    randomGrade([

        {name:"normal", rate:60},
        {name:"A", rate:20},
        {name:"S", rate:10},
        {name:"gold", rate:6},
        {name:"signature", rate:4}

    ]);



    getPlayerByGrade(grade);


    saveGame();

    updateUI();

}





// 고급 뽑기권 사용

function useHighGachaTicket(){


    if(inventory.highGachaTicket <= 0){

        alert("고급 뽑기권이 없습니다.");
        return;

    }


    inventory.highGachaTicket--;



    let grade =
    randomGrade([

        {name:"A", rate:60},
        {name:"S", rate:20},
        {name:"gold", rate:15},
        {name:"signature", rate:5}

    ]);



    getPlayerByGrade(grade);



    saveGame();

    updateUI();

}





// 확률 계산

function randomGrade(list){


    let total = 0;


    list.forEach(item=>{

        total += item.rate;

    });



    let random =
    Math.random()*total;



    let sum = 0;



    for(let item of list){


        sum += item.rate;



        if(random <= sum){

            return item.name;

        }

    }


}

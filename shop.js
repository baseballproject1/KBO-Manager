// ============================
// shop.js
// 상점 구매 시스템
// ============================


// 아이템 보유 개수

let inventory = {

    normalGachaTicket: 0,
    highGachaTicket: 0,
    traitChangeTicket: 0,
    enhanceTicket: 0,
    protectTicket: 0,
    advancedEnhanceTicket: 0

};



// 아이템 ID 연결

const itemKey = {

    normal_gacha:
    "normalGachaTicket",

    high_gacha:
    "highGachaTicket",

    trait_change:
    "traitChangeTicket",

    enhance_ticket:
    "enhanceTicket",

    protect_ticket:
    "protectTicket",

    advanced_enhance:
    "advancedEnhanceTicket"

};





// 구매 함수

function buyItem(itemId){


    let item =
    shopItems.find(
        x => x.id === itemId
    );


    if(!item){

        alert("상품이 없습니다.");
        return;

    }



    // 돈 부족

    if(money < item.price){

        alert(
        "💰 자금이 부족합니다."
        );

        return;

    }



    // 돈 차감

    money -= item.price;



    // 아이템 지급

    let key =
    itemKey[itemId];



    if(key){

        inventory[key]++;

    }



    alert(

    `
    구매 완료!

    ${item.name}

    `

    );



    saveGame();

    updateUI();


}

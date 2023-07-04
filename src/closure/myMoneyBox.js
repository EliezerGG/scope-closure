// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox:$${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);


function createPetList() {
    // Tu código aquí 👈
    let petList = [];
    function addPet(pet) {
      petList.push(pet)
      return console.log(petList);;
    }
    return addPet;
  }
  
 const myPetList = createPetList();

  myPetList("michi");
  
  myPetList("firulais");
  
  myPetList();
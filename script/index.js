
// reuseable function create---

function getEmergencyServices(id){
    const services = document.getElementById(id);
    return services;
};

// The functionality of clicking on the heart of cards and increasing number of heart on the navbar button----
const cardsHeart = document.getElementsByClassName('card-heart');
for(const hearts of cardsHeart){
    hearts.addEventListener('click', function(){
        const heartCount = getEmergencyServices('heart-count').innerText;
    const heartCountIncrease = Number(heartCount) + 1;
    getEmergencyServices('heart-count').innerText = heartCountIncrease;

    });
};

// The functionality of clicking on the cards call button,an alert message show which is including service name and number then reduce 20 coins after clicking----- 
getEmergencyServices('emergency-services').addEventListener('click', function(event){
    if(event.target.className.includes('call-btn')){
        const callButton = event.target;
        const serviceName = callButton.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = callButton.parentNode.parentNode.children[1].children[2].innerText;
        const date = new Date().toLocaleTimeString();
         let btnCoin = Number(getEmergencyServices('btn-coin').innerText);
      if(btnCoin >= 20){
        alert(`📞Calling ${serviceName} ${serviceNumber}`);
        btnCoin = btnCoin - 20;
       getEmergencyServices('btn-coin').innerText = btnCoin;
        
      }
      else{
        alert('You dont have enough coins.You need at least 20 coins to make a call.');
        return;
        
      } 
      const callHistoryContainer = getEmergencyServices('call-history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
      <div class="flex justify-between items-center bg-[#FAFAFA] p-4 mt-5 rounded-lg ">
                    <div>
                        <h2 class="inter-font font-semibold text-lg">${serviceName}</h2>
                        <p class="hind-madurai-font text-[#5C5C5C] text-lg">${serviceNumber}</p>
                    </div>
                    <div>
                        <p class="hind-madurai-font text-lg">${date}</p>
                    </div>
                </div>
    `
    callHistoryContainer.append(newHistory); 
    };

});
// The functionality of clear button which is clear all the call history from history container---
document.getElementById('clear-btn').addEventListener('click', function(){
    const callHistoryContainer = getEmergencyServices('call-history-container');
    callHistoryContainer.innerHTML = "";
});

// The functionality of clicking on the cards copy button, an alert message show which is including the hotline number then added copy number in copy navigation button----- 
getEmergencyServices('emergency-services').addEventListener('click', function(event){
    if(event.target.className.includes('copy-btn')){
        const copyButton = event.target;
        const copyNumber = copyButton.parentNode.parentNode.children[1].children[2].innerText;
        navigator.clipboard.writeText(copyNumber);
        alert(`The number has been copied: ${copyNumber}`);
        let copyCount = getEmergencyServices('copy-count').innerText;
        const copyIncrease = Number(copyCount) + 1;
        getEmergencyServices('copy-count').innerText = copyIncrease;

        
    };
});











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





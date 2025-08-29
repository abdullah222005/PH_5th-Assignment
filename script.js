// Heart icon making interactive
let mainHeart = Number(document.getElementById('HeartCount').innerText);
const heartIcons = document.querySelectorAll('.fa-heart');
heartIcons.forEach(Icon => {
   Icon.addEventListener('click', function(){
    mainHeart++;
    document.getElementById('HeartCount').innerText = mainHeart;
   });
});
// Copy button making interactive
let mainCopy = Number(document.getElementById('CopyCount').innerText);
const copyButtons = document.querySelectorAll(".CopyButton");
copyButtons.forEach(cpBtn => {
  cpBtn.addEventListener('click', function(){
    const hotlineNumber = cpBtn.closest(".card").querySelector(".hotlineNum").innerText;
    navigator.clipboard.writeText(hotlineNumber);
    mainCopy++;
    document.getElementById('CopyCount').innerText = mainCopy;
    alert("Copied: " + hotlineNumber);
  });
});
// Call button making interactive
const CallButtons = document.querySelectorAll('.CallButton');
let Coin = Number(document.getElementById('Coins').innerText);
const historyContainer = document.getElementById("HistoryContainer");
CallButtons.forEach(CallBtn => { 
    CallBtn.addEventListener('click', function(){
        if(Coin >= 20){
            const Station = CallBtn.closest(".card").querySelector(".station").innerText;
            const hotlineNumber = CallBtn.closest(".card").querySelector(".hotlineNum").innerText;
            Coin -= 20;
            document.getElementById('Coins').innerText = Coin;
            const time = new Date().toLocaleTimeString();
            
            const historyDiv = document.createElement("div");
            historyDiv.className = "flex items-center justify-between p-4 bg-[#5C5C5C1A] rounded-lg mx-5 mb-2";
            historyDiv.innerHTML = `
                <div>
                    <h3 class="font-semibold">${Station}</h3>
                    <p class="text-sm text-gray-500">${hotlineNumber}</p>
                </div>
                <span>${time}</span>
            `;
            historyContainer.appendChild(historyDiv);
            alert('Calling ' + Station + ' ' + hotlineNumber + '...');
        } else {
            alert('You do not have enough coins. For calling, minimum 20 coins required.');
        }
    });
});

const clearBtn = document.getElementById('ClearBtn');
clearBtn.addEventListener("click", function() {
    historyContainer.innerHTML = " ";
});



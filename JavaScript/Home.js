function blog() {
   window.location.href = '/blog.html';
}

document.getElementById('donate-button').addEventListener('click', function (event) {
   event.preventDefault();
   handleDonation('donation-amount', 'fixed-balance', 'donate-new-balance', 'Feni Flood Relief');
   
});

document.getElementById('donate-button-2').addEventListener('click', function (event) {
   event.preventDefault();
   handleDonation('donation-amount-2', 'fixed-balance', 'donate-new-balance-2', 'Noakhali Flood Relief');
});

document.getElementById('donate-button-3').addEventListener('click', function (event) {
   event.preventDefault();
   handleDonation('donation-amount-3', 'fixed-balance', 'donate-new-balance-3', 'Aid for Injured in Quota Movement');
});


function handleDonation(inputId, balanceId, sectionBalanceId, sectionName) {
   const inputDonate = parseFloat(document.getElementById(inputId).value);
   const fixedBalance = parseFloat(document.getElementById(balanceId).innerText);
   if(isNaN(inputDonate)){
      alert('Enter a valid amount')
      return 
   }
  


   if (inputDonate > 0 && inputDonate <= fixedBalance) {
       const sectionBalance = parseFloat(document.getElementById(sectionBalanceId).innerText);
       document.getElementById(sectionBalanceId).innerText = inputDonate + sectionBalance;
       document.getElementById(balanceId).innerText = fixedBalance - inputDonate;

       
       addToHistory(sectionName, inputDonate);
   } else if (inputDonate > fixedBalance) {
       alert('Not enough balance');
   } else {
       alert('Invalid Donation Amount');
   }
}

function getCurrentTime() {
   let now = new Date();
   return now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }); 
}


function addToHistory(sectionName, donationAmount) {
   let time = getCurrentTime();
   const historyItem = document.createElement('div');
   historyItem.className = 'bg-white border-2 p-3 rounded-md';
   historyItem.innerHTML = `
       <p class="text-2xl text-black font-bold">${donationAmount} Taka is Donated for ${sectionName}</p>
       <p class="text-lg text-gray-500 font-medium">${time} (Dhaka Time)</p>
   `;
   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}
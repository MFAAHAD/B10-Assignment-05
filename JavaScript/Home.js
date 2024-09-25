function blog(){
   window.location.href = '/blog.html'
}

document.getElementById('donate-button').addEventListener('click', function (event) {
   event.preventDefault();

   const inputDonate = parseFloat(document.getElementById('donation-amount').value);
   const fixedBalance = parseFloat(document.getElementById('fixed-balance').innerText)
   
   if (inputDonate !== 'string' && inputDonate >0) {
      const donateNewBalance = parseFloat(document.getElementById('donate-new-balance').innerText);
      const newBalanceDonation =  inputDonate + donateNewBalance;
      document.getElementById('donate-new-balance').innerText = newBalanceDonation;

      const newMainBalance = fixedBalance - inputDonate ;
      document.getElementById('fixed-balance').innerText = newMainBalance ;
   }

   else {
      alert ('Invalid Donation Amount')
   }


   const historyItem = document.createElement('div')
   historyItem.className = 'bg-white border-2 p-3 rounded-md';
   historyItem.innerHTML = `
   <p class ="text-2xl text-black font-bold">${inputDonate} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
   <p class ="text-lg text-gray-500 font-medium">${new Date().toString()}</p>
   
   
   `;
   
   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})





document.getElementById('donate-button-2').addEventListener('click', function (event) {
   event.preventDefault();

   const inputDonate = parseFloat(document.getElementById('donation-amount-2').value);
   const fixedBalance = parseFloat(document.getElementById('fixed-balance').innerText)
   
   if (inputDonate !== 'string' && inputDonate >0) {
      const donateNewBalance = parseFloat(document.getElementById('donate-new-balance-2').innerText);
      const newBalanceDonation =  inputDonate + donateNewBalance;
      document.getElementById('donate-new-balance-2').innerText = newBalanceDonation;

      const newMainBalance = fixedBalance - inputDonate ;
      document.getElementById('fixed-balance').innerText = newMainBalance ;
   }

   else {
      alert ('failed to donate your amount ! please try again')
   }

   const historyItem = document.createElement('div')
   historyItem.className = 'bg-white border-2 p-3 rounded-md';
   historyItem.innerHTML = `
   <p class ="text-2xl text-black font-bold">${inputDonate} Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>
   <p class ="text-lg text-gray-500 font-medium">${new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }))}</p>
   
   
   `;
   
   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild);
   
})



document.getElementById('donate-button-3').addEventListener('click', function (event) {
   event.preventDefault();

   const inputDonate = parseFloat(document.getElementById('donation-amount-3').value);
   const fixedBalance = parseFloat(document.getElementById('fixed-balance').innerText)
   
   if (inputDonate !== 'string' && inputDonate >0) {
      const donateNewBalance = parseFloat(document.getElementById('donate-new-balance-3').innerText);
      const newBalanceDonation =  inputDonate + donateNewBalance;
      document.getElementById('donate-new-balance-3').innerText = newBalanceDonation;

      const newMainBalance = fixedBalance - inputDonate ;
      document.getElementById('fixed-balance').innerText = newMainBalance ;
   }

   else {
      alert ('failed to donate your amount ! please try again')
   }



   const historyItem = document.createElement('div')
   historyItem.className = 'bg-white border-2 p-3 rounded-md';
   historyItem.innerHTML = `
   <p class ="text-2xl text-black font-bold">${inputDonate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
   <p class ="text-lg text-gray-500 font-medium">${new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }))}</p>
   
   
   `;
   
   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})








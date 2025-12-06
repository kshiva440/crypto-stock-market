alert("Welcome to My Finance & Crypto Blog!");
// Alert on page load
alert("Welcome to My Finance & Crypto Blog!");

// Function to fetch live crypto prices
async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=inr');
        const data = await response.json();
        
        document.getElementById('bitcoin-price').innerText = 
            `Bitcoin: ₹${data.bitcoin.inr.toLocaleString()}`;
        document.getElementById('ethereum-price').innerText = 
            `Ethereum: ₹${data.ethereum.inr.toLocaleString()}`;
    } catch (error) {
        console.log("Error fetching crypto prices:", error);
        document.getElementById('bitcoin-price').innerText = "Bitcoin: Error";
        document.getElementById('ethereum-price').innerText = "Ethereum: Error";
    }
}

// Fetch prices every 60 seconds
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000);

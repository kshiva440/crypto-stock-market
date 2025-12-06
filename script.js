// Welcome alert
alert("Welcome to My Finance & Crypto Blog!");

// Function to fetch live crypto prices
async function fetchCryptoPrices() {
    try {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano&vs_currencies=inr'
        );
        const data = await response.json();
        
        document.getElementById('bitcoin-price').innerText =
            `Bitcoin: ₹${data.bitcoin.inr.toLocaleString()}`;
        document.getElementById('ethereum-price').innerText =
            `Ethereum: ₹${data.ethereum.inr.toLocaleString()}`;
        document.getElementById('dogecoin-price').innerText =
            `Dogecoin: ₹${data.dogecoin.inr.toLocaleString()}`;
        document.getElementById('cardano-price').innerText =
            `Cardano: ₹${data.cardano.inr.toLocaleString()}`;
    } catch (error) {
        console.log("Error fetching crypto prices:", error);
        document.getElementById('bitcoin-price').innerText = "Bitcoin: Error";
        document.getElementById('ethereum-price').innerText = "Ethereum: Error";
        document.getElementById('dogecoin-price').innerText = "Dogecoin: Error";
        document.getElementById('cardano-price').innerText = "Cardano: Error";
    }
}

// Fetch prices every 60 seconds
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000);

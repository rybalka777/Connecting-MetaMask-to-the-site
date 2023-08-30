document.addEventListener('DOMContentLoaded', function() {
    const connectButton = document.getElementById('connectButton');

    async function connectToMetaMask() {
        if (window.ethereum) {
            try {
                await ethereum.request({ method: 'eth_requestAccounts' });
            }
        }
    }
});
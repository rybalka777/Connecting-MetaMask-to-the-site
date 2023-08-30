document.addEventListener('DOMContentLoaded', function() {
    const connectButton = document.getElementById('connectButton');

    async function connectToMetaMask() {
        if (window.ethereum) {
            try {
                await ethereum.request({ method: 'eth_requestAccounts' });

                const accounts = await ethereum.request({ method: 'eth_accounts' });
                const address = accounts[0];

                const balanceWei = await ethereum.request({
                    method: 'eth_getBalance',
                    params: [address, 'latest']
                });
            }
        }
    }
});
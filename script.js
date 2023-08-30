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
                const Web3 = window.Web3;
                const web3 = new Web3();
                const balanceEther = web3.utils.fromWei(balanceWei, 'ether');

                let balance = `${balanceEther} ETH`;
                alert(balance);
                document.getElementById("balik").innerHTML = balance;
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('MetaMask not detected. Please install MetaMask extension.');
        }
    }
});
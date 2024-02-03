const connectButton = document.getElementById('connectButton');
const walletInfo = document.getElementById('walletInfo');

connectButton.addEventListener('click', async () => {
    try {
        // Check if Phantom is installed
        if ('solana' in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                // Try to connect to the wallet
                const response = await window.solana.connect();
                const publicKey = response.publicKey.toString();

                // Display the public key
                walletInfo.innerHTML = `Connected wallet public key: ${publicKey}`;

                // Fetch balance
                const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
                const balance = await connection.getBalance(new solanaWeb3.PublicKey(publicKey));

                // Convert balance (which is in lamports) to SOL
                const solBalance = balance / solanaWeb3.LAMPORTS_PER_SOL;
                walletInfo.innerHTML += `<br>Balance: ${solBalance.toFixed(2)} SOL`;
            }
        } else {
            alert('Phantom wallet is not installed!');
        }
    } catch (err) {
        console.error(err);
        alert('Failed to connect');
    }
});

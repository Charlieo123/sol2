import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app's styles
require('@solana/wallet-adapter-react-ui/styles.css');

const App = () => {
    // Set up the network to connect to
    const network = clusterApiUrl('mainnet-beta');

    // Set up wallets to connect to
    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {/* Your app's components go here, along with the WalletMultiButton for connecting */}
                    <div>
                        <WalletMultiButton />
                        {/* Additional UI components and content */}
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;

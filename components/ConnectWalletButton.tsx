import MuiAlert from '@mui/material/Alert';
import Popper from '@mui/material/Popper';
import React, { useEffect, useState } from 'react';
import tw from "twin.macro";
import { useWallet } from '../hook/WalletContext';
import { parseAddressForShow } from '../utils/utils';
import Hint from './Hint';

export const Button = tw.button`inline-flex items-center border px-4 border-transparent rounded-2xl shadow-sm ring-1 ring-black text-black bg-white bg-opacity-90 hover:(bg-opacity-100)`

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
    onlyButton?: boolean,
}

function ConnectWalletButton({ onlyButton = false }: Props) {
    const { wallet, setUserWallet, connectWallet, disconnectWallet, isWalletConnected, isNotMainnet, errorMessage } = useWallet();
    const [open, setOpen] = useState(false);
    const [hintMessage, setHintMessage] = useState("");
    const [hintType, setHintType] = useState("success");

    const [userAddress, setUserAddress] = useState<string | null>(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleWalletButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const walletButtonOpen = Boolean(anchorEl);
    const id = walletButtonOpen ? 'simple-popper' : undefined;

    useEffect(() => {
        if (errorMessage && errorMessage.length > 0) {
            setHintMessage(errorMessage);
            setOpen(true);
            setHintType("error");
        }
    }, [errorMessage])
    useEffect(() => {
        if (isWalletConnected) {
            setUserAddress(wallet.userAddress);
        }

    }, [wallet, isWalletConnected])

    if (onlyButton) {
        return (
            <Button onClick={connectWallet}>
                Connect Wallet
            </Button >
        )
    }
    return (
        <>
            <Hint open={open} setOpen={setOpen} message={errorMessage} type={hintType} />
            {
                (isWalletConnected && userAddress) ?
                    <div tw="relative">
                        <div tw="flex gap-2">
                            <Button aria-describedby={id} onClick={handleWalletButtonClick}>
                                {parseAddressForShow(userAddress)}
                            </Button>

                            {/* 
                            <div tw="inline-flex items-center border px-2 border-transparent text-lg rounded-lg shadow-sm ring-1 ring-red-500 text-red-500">
                                {isNotMainnet() ? "Testnet" : "Mainnet"}
                            </div> */}


                        </div>

                        <Popper style={{ zIndex: 999 }} id={id} open={walletButtonOpen} anchorEl={anchorEl}>
                            <div tw="bg-white mt-2 rounded-lg px-2 py-2">
                                <button className="hover:bg-gray-400 px-2 rounded-lg"
                                    onClick={async () => {
                                        disconnectWallet();
                                    }}>

                                    Disconnect
                                </button>
                            </div>
                        </Popper>
                    </div>
                    :
                    <Button onClick={async () => {
                        await connectWallet();
                        setAnchorEl(null);
                    }}>
                        Connect Wallet
                    </Button>
            }
        </>

    )
}

export default ConnectWalletButton
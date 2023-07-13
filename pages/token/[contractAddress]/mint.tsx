import { MediaRenderer, Web3Button, useActiveClaimConditionForWallet, useAddress, useClaimIneligibilityReasons, useContract, useContractMetadata, useContractRead, useNFTs, useTotalCirculatingSupply, useTotalCount } from "@thirdweb-dev/react";
import React from "react";
import Container from "../../../components/Container/Container";
import { NFT_COLLECTION_ADDRESS } from "../../../const/contractAddresses";
import styles from "../../../styles/Mint.module.css";
import { ethers } from "ethers";

export default function Mint() {
    // Load all of the NFTs from the NFT Collection
    const address = useAddress();
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const {
        data: contractMetadata,
        isLoading: isContractMetadataLoading
    } = useContractMetadata(contract);
    const {
        data: activeClaimPhase,
        isLoading: isActiveClaimPhaseLoading
    } = useActiveClaimConditionForWallet(contract, address)
    const {
        data: totalSuply,
        isLoading: isTotalSuplyLoading
    } = useTotalCount(contract)
    const {
        data: totalClaimed,
        isLoading: isTotalClaimedLoading
    } = useTotalCirculatingSupply(contract)

    const maxClaimable = parseInt(activeClaimPhase?.maxClaimablePerWallet || "0")

    const {
        data: claimIneleigibility,
        isLoading: isClaimIneleigibilityLoading
    } = useClaimIneligibilityReasons(
        contract,
        {
            walletAddress: address || "",
            quantity: 1,
        }
    )

    return (
        <Container maxWidth="lg">
            <div className={styles.container}>
                <div className={styles.main}>
                    {!isContractMetadataLoading && (
                        <div className={styles.hero}>
                            <div className={styles.collectionImage}>
                                <MediaRenderer
                                    src={contractMetadata?.image}
                                />
                            </div>
                            <div>
                                <h1>{contractMetadata?.name}</h1>
                                <p>{contractMetadata?.description}</p>
                                {!isActiveClaimPhaseLoading ? (
                                    <div>
                                        <p>Claim Phase: {activeClaimPhase?.metadata?.name}</p>
                                        <p>Price: {ethers.utils.formatUnits(activeClaimPhase?.price!)} ETH</p>
                                    </div>
                                ) : (
                                    <p>Loading...</p>
                                )}
                                {!isTotalSuplyLoading && !isTotalClaimedLoading ? (
                                    <p>Claimed: {totalClaimed?.toNumber()} / {totalSuply?.toNumber()} </p>
                                ) : (
                                    <p>Loading...</p>
                                )}
                                {
                                    address ? (
                                        !isClaimIneleigibilityLoading ? (
                                            claimIneleigibility?.length! > 0 ? (
                                                claimIneleigibility?.map((reason) => (
                                                    <p>{reason}</p>
                                                ))
                                            ) : (
                                                <div>
                                                    <p>You are eligible to claim {`(Max claimable: ${maxClaimable})`}</p>
                                                    <Web3Button
                                                        contractAddress={NFT_COLLECTION_ADDRESS}
                                                        action={(contract) => contract.erc721.claim(1)}
                                                    >Claim</Web3Button>
                                                </div>
                                            )
                                        ) : (
                                            <p>Loading...</p>
                                        )
                                    ) : (
                                        <p>Connect your wallet to claim</p>
                                    )                                 
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </Container>
    );
}

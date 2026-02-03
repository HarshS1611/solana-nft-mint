# 🖼️ NFT Mint & Swap on Solana Devnet

## Objective

Mint an NFT with image and metadata on **Solana Devnet**, then trade the NFT with another person using devnet wallets and Discord-based coordination.

---

## What Was Done

* Created and uploaded NFT image to Irys
* Created and uploaded NFT metadata (Metaplex standard)
* Minted a custom NFT on Solana Devnet using Metaplex + UMI
* Swapped the NFT with another person using devnet wallets
* Recorded mint and swap transaction hashes
* Reflected on limitations of manual NFT trading

---

## NFT Details

* **Name:** Chill Guy
* **Symbol:** CHILL
* **Image URI:**
  [https://gateway.irys.xyz/7KmL54C3ZwgTfguwzcwb5uWUSBpdwhhmhg3BAscJToLd](https://gateway.irys.xyz/7KmL54C3ZwgTfguwzcwb5uWUSBpdwhhmhg3BAscJToLd)
* **Metadata URI:**
  [https://gateway.irys.xyz/ESb43hcJU1JjCAMqPy77wkHCAyWb124rXH9XVUpz2CJe](https://gateway.irys.xyz/ESb43hcJU1JjCAMqPy77wkHCAyWb124rXH9XVUpz2CJe)

---

## Project Structure

```
cluster1/
├── nft_image.ts        # Upload NFT image to Irys
├── nft_metadata.ts     # Create & upload metadata JSON
├── nft_mint.ts         # Mint NFT on Solana Devnet
```

---

## How to Run

```bash
yarn

# Upload image
yarn nft_image

# Upload metadata
yarn nft_metadata

# Mint NFT
yarn nft_mint
```

---

## Transactions

### Mint Transaction

* **Mint TX:**
  https://explorer.solana.com/tx/4zhnoYXANWFe9pfAVHLn1YxcvS2Vea6DA7S7jMxMTdtmRZEgXHUdQkFCDGbd6ZefsKV2BJtSGiAkve2cPt1LvcJA?cluster=devnet

* **Mint Address:**
  `97xGGcBXBbKSaMCGZjTjKLsBHMLEt7egvRURLmFnBCNq`

### Swap Transaction

* **NFT Swap TX (My Wallet):**
    https://explorer.solana.com/tx/465YZ3ZVX2PZ3h1rVnUCUoaaFGYRXCSaqNSxv5Z6HCVD9GuDgqYyUgC5oZoPKtMLSdcNNagDkYm4YKd1jGqT1fnR?cluster=devnet


* **NFT Swap TX (Other Wallet):**
  https://explorer.solana.com/tx/3go4szKhDGbHLt9zNVAwpPUAFdMcL5jgbDaacopVzL59As8GLqb7njkmoW1wt1EPGdT8KEwNp7FwEXtYtxsACj6o?cluster=devnet


---

## Screenshots

* NFT minted successfully
  <img width="2396" height="1912" alt="image" src="https://github.com/user-attachments/assets/30e49807-3ebf-4b65-b08e-aa840ed9b6e4" />
 
* NFT visible on Solana Explorer
  <img width="2403" height="1353" alt="image" src="https://github.com/user-attachments/assets/5308b4a8-cdef-4183-87d8-e22821557a5b" />
  
* Wallet before and after swap

  <img width="358" height="615" alt="image" src="https://github.com/user-attachments/assets/08a0aacc-0dbe-471d-9f67-3c54e58ec3b8" />
  <img width="364" height="613" alt="image" src="https://github.com/user-attachments/assets/cbf2841f-131e-4446-b816-1a8494cf889d" />

---

## Reflection

### Problems / Limitations

* NFT trading via Discord or other social platforms is trust-based.
* There is no atomic guarantee — one party could back out and the deal could fail.
* High coordination and communication overhead between traders.
* No built-in escrow or safety mechanisms.

### Proposed Solutions

* Use atomic NFT swap smart contracts.
* Use escrow-based trading programs.
* Rely on decentralized NFT marketplaces with trustless settlement.



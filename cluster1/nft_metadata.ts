import wallet from "/Users/harshsingh/.config/solana/id.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"

// Create a devnet connection
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

(async () => {
    try {
        // Follow this JSON structure
        // https://docs.metaplex.com/programs/token-metadata/changelog/v1.0#json-structure

        const image = "https://gateway.irys.xyz/7KmL54C3ZwgTfguwzcwb5uWUSBpdwhhmhg3BAscJToLd"

        const metadata = {
          name: "Chill Guy",
          symbol: "CHILL",
          description: "A laid-back chill guy enjoying life on Solana 😎",
          image,
          attributes: [
            { trait_type: "Vibe", value: "Chill" },
            { trait_type: "Mood", value: "Unbothered" },
          ],
          properties: {
            category: "image",
            files: [
              {
                uri: image,
                type: "image/png",
              },
            ],
          },
          creators: [
            {
              address: signer.publicKey,
              share: 100,
            },
          ],
        }
        

        // Convert metadata to JSON buffer
        const metadataBuffer = Buffer.from(JSON.stringify(metadata))

        // Wrap as GenericFile
        const metadataFile = createGenericFile(
            metadataBuffer,
            "metadata.json",
            { contentType: "application/json" }
        )

        const [myUri] = await umi.uploader.upload([metadataFile])
        console.log("Your metadata URI: ", myUri);
    }
    catch (error) {
        console.log("Oops.. Something went wrong", error);
    }
})();

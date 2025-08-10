import sdk from "@/lib/sdk";

export async function loadGlobalData() {
    return await sdk.single("global").find();
}
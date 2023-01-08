// @ -0,0 +1,14 @@
  import { contractAddress, Endpoint } from "../constants/constants";
import { ethers } from "ethers";
export default async function handler(req, res) {
    const provider = new (ethers.providers.getDefaultProvider) (Endpoint);
    let abi = [
    "function getAllposts() public view returns(post[] memory)",
    ];
    const smartContract = new ethers.Contract(contractAddress, abi, provider);
    const result = await smartContract.getPosts();
    const posts = result[0].map((post, index) => {
    return [...post, result[1][index]]
     });
    res.status(200).json(posts);
}

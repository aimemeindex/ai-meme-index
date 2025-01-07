import axios from "axios";

export async function getTokenPrice(tokenId: string) {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`;
  const response = await axios.get(url);
  return response.data[tokenId].usd;
}

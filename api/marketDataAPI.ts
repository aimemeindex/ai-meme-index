import axios from "axios";

export async function fetchMarketData() {
  const url = "https://api.dexscreener.com/latest/dex";
  const response = await axios.get(url);
  return response.data;
}

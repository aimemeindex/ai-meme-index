import axios from "axios";

export async function fetchAgentData() {
  const response = await axios.get("https://api.virtuals.io/agent/data");
  return response.data;
}

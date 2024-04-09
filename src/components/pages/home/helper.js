import axios from "axios";

export const fetchTokenDetails = async (address) => {
    try {
      const response = await axios.get(
        `https://api.geckoterminal.com/api/v2/networks/solana/tokens/multi/${address}`
      );
      const data = response.data.data[0];
      return data
    } catch (error) {
        console.error(`Error fetching details:`, error);
        throw error;
    }
  };
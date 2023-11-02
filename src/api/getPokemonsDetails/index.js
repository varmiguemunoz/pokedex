import axios from "axios";

export const GetPokemonsDetails = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

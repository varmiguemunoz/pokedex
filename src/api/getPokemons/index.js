import axios from "axios";
import { API_HOST } from "@env";

export const GetPokemons = async (nextPokemonsUrl) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await axios.get(nextPokemonsUrl || url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

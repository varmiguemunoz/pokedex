import axios from "axios";
import { API_HOST } from "@env";

export async function GetPokemonsById(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await axios.get(url);
    return response;
  } catch (err) {
    throw err;
  }
}

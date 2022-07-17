import axios from "axios";

async function dolarPrice() {
  try {
    const response = await axios.get(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export default dolarPrice;

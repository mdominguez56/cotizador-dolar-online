import axios from "axios";

const axiosClient = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
});

async function oficialDolar() {
  try {
    const response = await axiosClient.get(
      "https://api-dolar-argentina.herokuapp.com/api/dolaroficial"
    );
    console.log(response.data);
  } catch (error) {
    return error;
  }
}

export default oficialDolar;

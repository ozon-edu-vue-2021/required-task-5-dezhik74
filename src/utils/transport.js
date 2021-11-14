import axios from "axios";

const DATA_URL = "https://random-data-api.com/api/food/random_food?size=30"

export async function loadData() {
  try {
    let res = await axios.get(DATA_URL);
    console.log(res.data);
    return res;
  } catch {
    console.log("error");
    return null;
  }
}


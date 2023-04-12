import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";
const SECOND_API_URL = "https://dummyjson.com";

export const getPost = async () => {
  try {
    const res = await axios({
      url: `${FIRST_API_URL}/posts`,
      method: "GET",
      params: {
        offset: 0,
        limit: 10,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";
const SECOND_API_URL = "https://dummyjson.com";

// export const getPost = async () => {
//   try {
//     const res = await axios({
//       url: `${FIRST_API_URL}/posts`,
//       method: "GET",
//       params: {
//         offset: 0,
//         limit: 10,
//       },
//     });
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getPost = async () => {
  try {
    const { data } = await axios(`${FIRST_API_URL}/posts`, {
      params: {
        offset: 0,
        limit: 10,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
      onDownloadProgress: function (progressEvent) {
        console.log(progressEvent, "first");
      },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async () => {
  const res = await axios.post(`${FIRST_API_URL}/posts`, {
    title: "Test title",
    body: "Test test test test test test",
  });
};

import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";

// axios.defaults.baseURL = FIRST_API_URL;
// axios.defaults.headers.common = {
//   Authorization: `Bearer ${localStorage.getItem("token")}`,
// };
// axios.defaults.withCredentials = true;

// export const getPost = async () => {
//   try {
//     const res = await axios({
//       url: `/posts`,
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

const firstApiAxios = axios.create({
  baseURL: FIRST_API_URL,
  headers: {
    Authorization: "Bearer 1221",
  },
  withCredentials: true,
});

export const getPost = async () => {
  try {
    const { data } = await firstApiAxios.get(`/posts`, {
      params: {
        offset: 0,
        limit: 10,
      },
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
  await firstApiAxios.post(`/posts`, {
    title: "Test title",
    body: "Test test test test test test",
  });
};

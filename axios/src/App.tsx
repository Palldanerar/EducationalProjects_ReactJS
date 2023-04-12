import { useEffect } from "react";
import { createPost, getPost } from "./api/requests";

function App() {
  useEffect(() => {
    createPost();
    getPost();
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;

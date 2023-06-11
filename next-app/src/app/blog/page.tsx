import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const blog = async () => {
  const posts = await getData();

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h1 className="text-2xl">Блог</h1>
      <ul>
        {posts.map((post: Post) => {
          return (
            <li
              key={post.id}
              className="mt-3 text-xl"
            >
              <Link href={`blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default blog;

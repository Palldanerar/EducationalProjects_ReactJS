type PostProps = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

const post = async ({ params: { id } }: PostProps) => {
  const post = await getData(id);
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h1 className="text-2xl">ID-поста: {post.id}</h1>
      <h1 className="text-2xl">Название поста: {post.title}</h1>
      <h1 className="text-2xl">Тело поста: {post.body}</h1>
    </div>
  );
};

export default post;

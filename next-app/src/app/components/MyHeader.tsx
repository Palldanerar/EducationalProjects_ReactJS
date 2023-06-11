import Link from "next/link";

const MyHeader = () => {
  return (
    <header className="w-full h-auto bg-black p-2">
      <nav className="w-[300px] h-auto flex justify-between">
        <Link
          href="/"
          className="text-xl text-white"
        >
          Главная
        </Link>
        <Link
          href="/blog"
          className="text-xl text-white"
        >
          Блог
        </Link>
        <Link
          href="/about"
          className="text-xl text-white"
        >
          О проекте
        </Link>
      </nav>
    </header>
  );
};

export default MyHeader;

import Link from "next/link";

const MyHeader = () => {
  return (
    <header className="w-full h-auto bg-black p-2">
      <nav className="w-[200px] h-auto flex justify-between">
        <Link
          href="/"
          className="text-xl text-white"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-xl text-white"
        >
          Blog
        </Link>
        <Link
          href="/about"
          className="text-xl text-white"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default MyHeader;

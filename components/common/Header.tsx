import Image from "next/image";
import Link from "next/link";

import logo from "../../public/IAQboost.png";

type listHeader = [
  {
    id: number;
    name: string;
  }
];

const listHeader = [
  {
    id: 1,
    name: "Topics",
    link: "/topics",
  },
  {
    id: 2,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    name: "Advice",
    link: "/advice",
  },
  {
    id: 4,
    name: "About Us",
    link: "/aboutus",
  },
];

const Header = () => {
  return (
    <div className="bg-primary">
      <section className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <a className="w-60 py-4">
            <Image src={logo} />
          </a>
        </Link>
        <div className="flex items-center justify-center">
          {listHeader.map((list) => (
            <div
              className="text-white flex text-lg px-4 hover:cursor-pointer"
              key={list.id}
            >
              <Link href={list.link}>{list.name}</Link>
              {list.name === "Topics" ? (
                <div className="pt-0.5 pr-1">
                  <svg
                    className="text-white h-6 w-6 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              ) : undefined}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Header;

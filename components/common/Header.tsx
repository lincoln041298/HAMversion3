import Image from "next/image";
import Link from "next/link";
import logo from "../../public/IAQboost.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
                  <ChevronDownIcon className="h-6 w-6" />
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

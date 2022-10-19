import Link from "next/link";
import ListPosts from "../data/postHAM.json";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { type } from "os";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";

type ListProps = {
  id: number;
  urlImage?: string;
  name: string;
  dateandtime: string;
  detail: string;
};

const newListPost = ListPosts.slice(0, 3);
// console.log(newListPost);

const OptimalSolution = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-bold">Common Air Problems</p>
          <Link href="/blog">
            <a className="text-primary flex hover:underline">
              See all <ArrowRightIcon className="h-6 w-6 ml-2" />
            </a>
          </Link>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-3 gap-x-10">
            {newListPost &&
              newListPost.map((list: ListProps) => (
                <div key={list.id}>
                  <div className="col-span-1">
                    {list?.urlImage ? (
                      <Image
                        src={`${list.urlImage}`}
                        width={500}
                        height={300}
                        className="rounded-xl"
                      />
                    ) : (
                      <UserIcon className="h-6 w-6" />
                    )}
                    <h3 className="text-2xl font-bold line-clamp-2">
                      {list.name}
                    </h3>
                    <p className="text-sm font-extralight">
                      {list.dateandtime}
                    </p>
                    <p className="text-lg font-light line-clamp-4">
                      {list.detail}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptimalSolution;

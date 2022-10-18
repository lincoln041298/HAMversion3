import Image from "next/image";
import HeroOnTop from "../public/hero-homepage-top.png";
import HeroOnRight from "../public/hero-homepage-right.png";
import HeroOnLeft from "../public/hero-homepage-left.png";

const HeroInformation = () => {
  return (
    <div className="bg-[#F3FEFE]">
      <section className="max-w-7xl mx-auto text-black">
        <div className="pt-20 flex items-center justify-between">
          <div>
            <p className="text-3xl font-semibold">All Information about</p>
            <p className="text-6xl font-bold py-8">The air in your home</p>
            <div className="mr-10">
              <input
                type="search"
                className="form-input w-full text-slate-700 rounded-full border-black focus:border-primary focus:ring-primary focus-visible:outline-none "
              />
            </div>
          </div>
          <p className="m-auto">
            <Image src={HeroOnTop} width={400} height={300}></Image>
          </p>
        </div>
        <div className="pb-20 flex justify-end items-center gap-16">
          <p>
            <Image src={HeroOnLeft} width={400} height={300}></Image>
          </p>
          <p>
            <Image src={HeroOnRight} width={400} height={300}></Image>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroInformation;

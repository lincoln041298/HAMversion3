import Image from "next/image";
import Link from "next/link";
import DiagramPullution from "../public/pollutiant-diagram.png";
const PollutantDiagram = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <section className="flex flex-col items-center ">
        <p className="text-5xl font-bold">Common Indoor Pollutants Diagram</p>
        <p className="text-primary font-thin">
          Each area in your home holds a particular group of pollutants. These
          are typical ones.
        </p>
        <p className="mt-10 mb-5  ">
          <Image src={DiagramPullution} />
        </p>
        <Link href="/indoorAirPollution">
          <a>
            <button className="px-20 py-4 rounded-full bg-orangeham text-white text-3xl font-semibold">
              INDOOR AIR POLLUTION
            </button>
          </a>
        </Link>
      </section>
    </div>
  );
};

export default PollutantDiagram;

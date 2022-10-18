import Image from "next/image";
import iconfacebook from "../../public/facebook.png";

type socialMedia = [
  {
    id: number;
    tag: string;
    name: string;
    url: string;
  }
];

type polixyHAM = [{ id: number; name: string }];

const socialMedia = [
  {
    id: 1,
    tag: "Facebook",
    name: "IAQBoost",
    url: "/../public/facebook.png",
  },
  {
    id: 2,
    tag: "Gmail",
    name: "Contact@iaqboost.com",
    url: "/../public/gmail.png",
  },
  {
    id: 3,
    tag: "twitter",
    name: "IAQBoost",
    url: "/../public/twitter.png",
  },
];

const polixyHAM = [
  {
    id: 1,
    name: "About Us",
  },
  {
    id: 2,
    name: "Contact Page",
  },
  {
    id: 3,
    name: "Privacy Policy",
  },
  {
    id: 4,
    name: "Affiliate Disclaimer",
  },
  {
    id: 5,
    name: "California Privacy Notice",
  },
];

function Footer() {
  return (
    <div className="bg-primary">
      <section className="max-w-7xl mx-auto text-white py-16">
        <div>
          <p className="font-light text-xl mb-10">
            Amazon.com Disclosure: As an Amazon Assoriate I earn from qualifying
            purchases
          </p>
          <div className="grid grid-cols-3 ">
            <div className="col-span-1 ">
              <div className="flex flex-col">
                <p className="uppercase text-5xl font-bold">hit it up!</p>
                <div className="mt-5">
                  {socialMedia.map((listsocial) => (
                    <div
                      key={listsocial.id}
                      className={
                        listsocial.id === 2
                          ? `my-3 flex items-center justify-start`
                          : `flex items-center justify-start`
                      }
                    >
                      <Image
                        src={`${listsocial.url}`}
                        width={20}
                        height={20}
                      ></Image>
                      <p className="pl-2 text-xl">{listsocial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              {polixyHAM.map((polixylist) => (
                <div
                  key={polixylist.id}
                  className="flex flex-col first:mt-0 mt-3.5"
                >
                  <p className="text-base font-semibold ">{polixylist.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

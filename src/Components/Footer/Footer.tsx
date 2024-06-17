import React from "react";
import Link from "next/link";

const snsSection = [
  {
    name: "facebook",
    imgSrc: "/icons/facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    name: "instagram",
    imgSrc: "/icons/instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    name: "twitter",
    imgSrc: "/icons/twitter.svg",
    link: "https://x.com/?lang=ko",
  },
  {
    name: "youtube",
    imgSrc: "/icons/youtube.svg",
    link: "https://www.youtube.com/",
  },
];

const Footer = () => {
  return (
    <footer className="bottom-0 flex h-24 w-full min-w-[400px] items-center justify-between whitespace-nowrap border-none bg-gnLightBlack p-0 px-20 text-white mobile:px-0">
      <div className="flex w-full items-center justify-between justify-items-center pb-6 mobile:flex-col">
        <div className="flex w-3/5 justify-between gap-4">
          <div> @codeit - 2024 </div>
          <div className="flex gap-5 whitespace-nowrap">
            <div>Privacy Policy</div>
            <div>FAQ</div>
          </div>
        </div>
        <div className="flex gap-3">
          {snsSection.map((sns) => {
            return (
              <Link href={sns.link} target="__blank" key={sns.name}>
                <img
                  src={sns.imgSrc}
                  alt={sns.name}
                  width={22}
                  height={22}
                  className="min-w-[22px]"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import IconFilter from "@@/icons/filterIcon.svg";
import IconLeftArrow from "/public/icons/leftArrowDefaultIcon.svg";
import IconLeftArrowVariant1 from "/public/icons/leftArrowVariant1Icon.svg";
import IconStarOn from "/public/icons/starOnIcon.svg";
import IconStarOff from "/public/icons/starOffIcon.svg";

import ImageSteppingStone from "/public/images/steppingStoneImage.png";
import ImageHotAirBalloon from "/public/images/HotAirBalloonImage.png";
import ImageStreetDance from "/public/images/StreetDanceImage.png";

export const ICON = {
  filter: {
    default: {
      src: IconFilter,
      alt: "가격 필터 드롭다운",
    },
  },
  leftArrow: {
    default: {
      src: IconLeftArrow,
      alt: "이전",
    },
    variant1: {
      src: IconLeftArrowVariant1,
      alt: "이전",
    },
  },
  star: {
    default: {
      src: IconStarOff,
      alt: "별",
    },
    active: {
      src: IconStarOn,
      alt: "별",
    },
  },
};

export const IMAGE = {
  banner: {
    first: {
      src: ImageSteppingStone,
      alt: "첫 번째 배너 이미지",
    },
    second: {
      src: ImageHotAirBalloon,
      alt: "두 번째 배너 이미지",
    },
    third: {
      src: ImageStreetDance,
      alt: "세 번째 배너 이미지",
    },
  },
};

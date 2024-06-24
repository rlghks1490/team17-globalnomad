import IconFilter from "@@/icons/filterIcon.svg";
import IconLeftArrow from "/public/icons/leftArrowDefaultIcon.svg";
import IconLeftArrowActive from "/public/icons/leftArrowActiveIcon.svg";
import IconLeftArrowVariant1 from "/public/icons/leftArrowVariant1Icon.svg";
import IconStarOn from "/public/icons/starOnIcon.svg";
import IconStarOff from "/public/icons/starOffIcon.svg";
import IconRightArrow from "/public/icons/rightArrowDefaultIcon.svg";
import IconRightArrowActive from "/public/icons/rightArrowActiveIcon.svg";
import IconRightArrowVariant1 from "/public/icons/rightArrowVariant1Icon.svg";
import IconDownArrow from "/public/icons/downArrowDefaultIcon.svg";
import IconCheck from "/public/icons/checkIcon.svg";

import ImagePlanTravel from "/public/images/PlanTravelImage.png";
import ImageWithTogether from "/public/images/WithTogetherImage.png";
import ImageMilkyWay from "/public/images/MilkyWayImage.png";
import ImageNoData from "/public/images/noData.png";

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
    active: {
      src: IconLeftArrowActive,
      alt: "이전",
    },
    variant1: {
      src: IconLeftArrowVariant1,
      alt: "이전",
    },
  },
  rightArrow: {
    default: {
      src: IconRightArrow,
      alt: "다음",
    },
    active: {
      src: IconRightArrowActive,
      alt: "다음",
    },
    variant1: {
      src: IconRightArrowVariant1,
      alt: "다음",
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
  downArrow: {
    default: {
      src: IconDownArrow,
      alt: "목록 열기/닫기",
    },
    active: {},
  },
  check: {
    default: {
      src: IconCheck,
      alt: "체크",
    },
    active: {},
  },
};

export const IMAGE = {
  banner: {
    first: {
      src: ImageMilkyWay,
      alt: "첫 번째 배너 이미지",
    },
    second: {
      src: ImagePlanTravel,
      alt: "두 번째 배너 이미지",
    },
    third: {
      src: ImageWithTogether,
      alt: "세 번째 배너 이미지",
    },
  },
  noData: {
    default: {
      src: ImageNoData,
      alt: "데이터없음",
    },
  },
};

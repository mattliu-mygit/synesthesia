import interview1 from "../interviews/Serena.mp3";
import interview2 from "../interviews/Nathan.mp3";
import interview3 from "../interviews/Mira.mp3";

const miraGMajorHex = [
  "#cd0f0f",
  "#91a72d",
  "#5bff3e",
  "#64ff9f",
  "#4ad8fe",
  "#00954b",
  "#3742d8",
  "#ec62fe",
  "#e8612c",
  "#764b1a",
  "#dab027",
  "#feff5d",
];

const miraEMinorHex = [
  // "#cd0f0f",
  // "#91a72d",
  // "#5bff3e",
  // "#64ff9f",
  // "#4ad8fe",
  // "#00954b",
  // "#3742d8",
  // "#ec62fe",
  // "#e8612c",
  // "#764b1a",
  // "#dab027",
  // "#feff5d",
];

export const mira = {
  name: "Mira",
  gMajorScaleCodes: miraGMajorHex,
  eMinorScaleCodes: miraEMinorHex,
  interview: interview3,
};

const nathanGMajorHex = [
  "#810303",
  "#d2516f",
  "#b49962",
  "#667d63",
  "#eaeaea",
  "#855809",
  "#e6b741",
  "#f1c1f5",
  "#a8a8a8",
  "#9bc2eb",
  "#69ecf8",
  "#53078d",
];

const nathanEMinorHex = [
  "#e10202",
  "#700610",
  "#ff7300",
  "#ffd71d",
  "#f8ff01",
  "#cd821f",
  "#d95f1e",
  "#165600",
  "#7f3811",
  "#336bfc",
  "#9705f1",
  "#ea00ff",
];

export const nathan = {
  name: "Nathan",
  gMajorScaleCodes: nathanEMinorHex,
  eMinorScaleCodes: nathanGMajorHex,
  interview: interview2,
};

const serenaGMajorHex = [
  "#7575ff",
  "#c40000",
  "#e06526",
  "#0080ff",
  "#00a2e8",
  "#ffffff",
  "#ffcb0e",
  "#ffd84d",
  "#41628f",
  "#83adcf",
  "#880015",
  "#a249a4",
];

const serenaEMinorHex = [
  "#008000",
  "#880015",
  "#964B00",
  "#800080",
  "#ab9ddb",
  "#ac4a35",
  "#ff9166",
  "#00a2e8",
  "#ffffff",
  "#ffffff",
  "#fff200",
  "#efe5b0",
];

export const serena = {
  name: "Serena",
  gMajorScaleCodes: serenaGMajorHex,
  eMinorScaleCodes: serenaEMinorHex,
  interview: interview1,
};

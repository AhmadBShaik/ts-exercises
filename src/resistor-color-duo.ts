type Color =
  | "black"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "violet"
  | "grey"
  | "white";

const getColorValue = (color: Color): string => {
  switch (color) {
    case "black":
      return "0";
    case "brown":
      return "1";
    case "red":
      return "2";
    case "orange":
      return "3";
    case "yellow":
      return "4";
    case "green":
      return "5";
    case "blue":
      return "6";
    case "violet":
      return "7";
    case "grey":
      return "8";
    case "white":
      return "9";
  }
};

export const resistorColorDuo = (colors: string): number => {
  const firstColor = colors.split("-")[0] as Color;
  const secondColor = colors.split("-")[1] as Color;

  const value = getColorValue(firstColor) + getColorValue(secondColor);
  return parseInt(value);
};

//better version
export const resistorColorDuo2 = (colors: Color[]): number => {
  const value = getColorValue(colors[0]) + getColorValue(colors[1]);
  return parseInt(value);
};

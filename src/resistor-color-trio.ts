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

const getColorValue = (color: Color): number => {
  switch (color) {
    case "black":
      return 0;
    case "brown":
      return 1;
    case "red":
      return 2;
    case "orange":
      return 3;
    case "yellow":
      return 4;
    case "green":
      return 5;
    case "blue":
      return 6;
    case "violet":
      return 7;
    case "grey":
      return 8;
    case "white":
      return 9;
  }
};

export const resistorColorTrio = (colors: string): number => {
  const firstColor = colors.split("-")[0] as Color;
  const secondColor = colors.split("-")[1] as Color;
  const thirdColor = colors.split("-")[2] as Color;

  let value = 10 * getColorValue(firstColor) + getColorValue(secondColor);
  
  if(thirdColor){
    value *= 10 ** getColorValue(thirdColor);
  }
  return value;
};

//better version
export const resistorColorTrio2 = (colors: Color[]): number => {
  let value = 10 * getColorValue(colors[0]) + getColorValue(colors[1])
  
  if(colors[2]){
    value *= 10 ** getColorValue(colors[2]);
  }
  return value;
};

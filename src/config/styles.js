import colors from "./colors";
import { fontFamily, fontSize } from "./fonts";

export default {
  colors,
  fontFamily,
  fontSize,
  text: {
    color: colors.dark,
    fontSize: fontSize.paragraph,
    fontFamily: fontFamily.regular,
  },
  h1: {
    color: colors.dark,
    fontSize: fontSize.xLarge,
    fontFamily: fontFamily.bold,
  },
  h2: {
    color: colors.dark,
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
  },
  h3: {
    color: colors.dark,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
  },
};

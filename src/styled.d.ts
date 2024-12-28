// styled.d.ts
import "styled-components";
import { ThemeType } from "./designtoken";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
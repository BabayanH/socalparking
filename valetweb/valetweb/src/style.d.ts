// styles.d.ts
export interface Style {
  boxWidth: string;
  heading2: string;
  paragraph: string;
  flexCenter: string;
  flexStart: string;
  paddingX: string;
  paddingY: string;
  padding: string;
  marginX: string;
  marginY: string;
}

export interface Layout {
  section: string;
  sectionReverse: string;
  sectionImgReverse: string;
  sectionImg: string;
  sectionInfo: string;
}

declare const styles: Styles;
export const layout: Layout;

export default styles;

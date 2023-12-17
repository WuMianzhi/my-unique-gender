export type RGBColorArray = [number, number, number];

export interface GenderCate {
  name: string;
  colorSeries: [string, string];
  value: number;
}

export interface GenderGroup {
  title: string;
  category: GenderCate[];
  mainColor?: string;
  hasCustom: boolean;
}

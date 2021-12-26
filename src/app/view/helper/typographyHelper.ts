import { Pallet } from "./colorHelper";

export enum FontSize {
  Xs = "12px",
  Small = "14px",
  Medium = "16px",
  Large = "24px",
  XLarge = "32px",
  LineHeight = "32px",
}

export enum FontColor {
  Headline = Pallet.Black,
  SubHeadline = Pallet.PrimaryLight,
  Paragraph = Pallet.PrimaryLight,
  WhiteText = Pallet.White,
  BlackText = Pallet.Black,
  Link = Pallet.Blue,
  Info = Pallet.Gray,
  warn = Pallet.Red,
  Error = Pallet.Red,
}

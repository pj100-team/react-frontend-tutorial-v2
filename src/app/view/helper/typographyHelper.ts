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
  GrayText = Pallet.Gray,
  DarkGrayText = Pallet.DarkGray,
  BlackText = Pallet.Black,
  Link = Pallet.Blue,
  Info = Pallet.Gray,
  warn = Pallet.Red,
  Error = Pallet.Red,
}

export enum CheckBoxColor {
  Finished = Pallet.Green,
  Unfinished = Pallet.Red,
}
import { Pallet } from "./colorHelper";

export enum BreakPoint {
  SmartPhone = "320px",
  LargeSmartPhone = "540px",
  Tablet = "980px",
  Laptop = "1258px",
  Desktop = "1680px",
}

export enum BackgroundColor {
  Background = Pallet.White,
  SubBackground = Pallet.SecondaryPale,
}

export enum ElementColor {
  Main = Pallet.Primary,
  Sub = Pallet.Secondary,
  White = Pallet.White,
}

export enum ListTileColor {
  Finished = Pallet.LightGreen,
  FrameFinished = Pallet.Green,
  Unfinished = Pallet.LightRed,
  FrameUnfinished = Pallet.Red,
}
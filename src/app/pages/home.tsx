import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import { FontColor } from "../view/helper/typographyHelper";
import PlainText from "../components/common/plainText";
// import ListTile from "../components/common/ListTile";
import CheckList from "../components/common/checkList";
import { CalendarHome } from "../components/common/calendar/calendarHome/CalendarHome";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <CalendarHome />
    {/* <PlainText fontColor={FontColor.SubHeadline}>あああああああ</PlainText> */}
    {/* <ListTile title={"タイトル"} subtitle={"サブタイトル"} /> */}
    {/* <CheckList /> */}
  </PageWrapper>
);

export default Home;

import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
// import { FontColor } from "../view/helper/typographyHelper";
// import PlainText from "../components/common/plainText";
// // import ListTile from "../components/common/ListTile";
// import CheckList from "../components/common/checkList";
// import { CalendarHome } from "../components/common/calendar/calendarHome/CalendarHome";
// import { AddressSearch } from "../components/common/addressSearch /AddressSearch";
// import { Link } from "react-router-dom";
// import { MenuBar } from "../components/common/menuBar/MenuBar";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
  </PageWrapper>
);

export default Home;

import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PlainText from "../components/common/plainText";
import CheckList from "../components/common/checkList";
import Calendar from "../components/common/calendar/calendar";
import AddressSearch from "../components/common/addressSearch/addressSearch";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import { FontColor } from "../view/helper/typographyHelper";
import { Items } from "../../mock/data/items";
import MenuBar from "../components/common/menuBar/menuBar";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <MenuBar/>
    <PlainText fontColor={FontColor.BlackText}>Hello, world! This is my react-tutorial app.<br/> Choose the upper menu you like.</PlainText>
  </PageWrapper>
);

export default Home;

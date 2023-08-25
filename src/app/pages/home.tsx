import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import Plaintext from "../components/common/plaintext";
import { FontColor } from "../view/helper/typographyHelper";
import ListTile from "../components/common/listtile";
import CheckList from "../components/common/checklist";
import Calendar from "../components/common/calendar";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <Calendar/>
  </PageWrapper>
);

export default Home;
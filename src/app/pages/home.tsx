import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import Plaintext from "../components/common/plaintext";
import { FontColor } from "../view/helper/typographyHelper";
import ListTile from "../components/common/listtile";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <Plaintext fontColor={FontColor.Paragraph}>hi</Plaintext>
    <ListTile title="I am title" subtitle="I am subtitle"/>
  </PageWrapper>
);

export default Home;

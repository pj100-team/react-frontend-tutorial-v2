import React from "react";
import Caption from "../components/common/caption";
import PlainText from "../components/common/plainText";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import { FontColor } from "../view/helper/typographyHelper";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <PlainText fontColor={FontColor.SubHeadline}>aaaa</PlainText>
    <PlainText fontColor={FontColor.Link}>bbb</PlainText>
  </PageWrapper>
);

export default Home;

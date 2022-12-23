import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import PlainText from "../components/common/plainText";
import { FontColor } from "../view/helper/typographyHelper";
import CheckBox from "../components/common/checkBox";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <PlainText fontColor={FontColor.SubHeadline}>あああああああ</PlainText>
    <CheckBox />
  </PageWrapper>
);

export default Home;

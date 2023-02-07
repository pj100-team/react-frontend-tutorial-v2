import React from "react";
import Caption from "../components/common/caption";
import CheckBox from "../components/common/checkBox";
import PlainText from "../components/common/plainText";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <PlainText>Plain text</PlainText>
    <PlainText>Plain text</PlainText>
    <CheckBox>Label</CheckBox>
  </PageWrapper>
);

export default Home;

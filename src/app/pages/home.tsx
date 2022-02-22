import React from "react";
import Caption from "../components/common/caption";
import CheckList from "../components/common/checkList";
import PlainText from "../components/common/plainText";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <PlainText>text</PlainText>
    <CheckList width={"100%"} />
  </PageWrapper>
);

export default Home;

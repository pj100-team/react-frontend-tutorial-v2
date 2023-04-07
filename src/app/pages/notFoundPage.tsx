import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import CheckList from "../components/common/checkList";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import { Items } from "../../mock/data/items";
import MenuBar from "../components/common/menuBar/menuBar";
import PlainText from "../components/common/plainText";
import { FontSize } from "../view/helper/typographyHelper";

const NotFoundPage: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <MenuBar/>
    <PlainText fontSize={FontSize.Large}>404</PlainText>
    <PlainText fontSize={FontSize.Medium}>The page is not found.</PlainText>
  </PageWrapper>
);

export default NotFoundPage;

import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import CheckList from "../components/common/checkList";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import { Items } from "../../mock/data/items";
import MenuBar from "../components/common/menuBar/menuBar";

const CheckListPage: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <MenuBar/>
    <CheckList ListTileDatas={Items}/>
  </PageWrapper>
);

export default CheckListPage;

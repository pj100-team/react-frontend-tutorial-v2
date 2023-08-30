import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import ListTile from "../components/common/listtile";
import CheckList from "../components/common/checklist";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <ListTile title="Some checkboxes" subtitle="try toggling" initialChecked={true} />
    <CheckList width="100%"/>
  </PageWrapper>
);

export default Home
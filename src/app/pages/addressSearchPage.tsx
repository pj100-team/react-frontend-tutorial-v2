import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import AddressSearch from "../components/common/addressSearch/addressSearch";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import MenuBar from "../components/common/menuBar/menuBar";

const AddressSearchPage: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <MenuBar/>
    <AddressSearch/>
  </PageWrapper>
);

export default AddressSearchPage;

import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import MenuBar from "../components/common/menuBar/menuBar";
import PhoneNumber from "../components/common/phoneNumber/phoneNumber";

const PhoneNumberPage: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <MenuBar/>
    <PhoneNumber/>
  </PageWrapper>
);

export default PhoneNumberPage;

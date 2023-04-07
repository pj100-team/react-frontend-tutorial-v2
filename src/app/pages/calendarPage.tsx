import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import Calendar from "../components/common/calendar/calendar";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import MenuBar from "../components/common/menuBar/menuBar";

const CalendarPage: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <MenuBar/>
    <Calendar/>
  </PageWrapper>
);

export default CalendarPage;

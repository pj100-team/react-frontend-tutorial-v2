import React from 'react'
import Calender from '../components/common/calender';
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";


const CalendarPage: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
  <Calender />
  </PageWrapper>
);

export default CalendarPage;
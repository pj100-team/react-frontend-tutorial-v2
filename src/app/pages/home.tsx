import React from "react";
import Calender from "../components/common/calender";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Calender />
  </PageWrapper>
);

export default Home;

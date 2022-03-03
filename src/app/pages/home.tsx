import React from "react";
import AddressSearch from "../components/common/addressSearch";
import Calender from "../components/common/calender";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <AddressSearch/>
    <Calender />
  </PageWrapper>
);

export default Home;

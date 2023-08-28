import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
<<<<<<< HEAD
import AddressSearch from "../components/common/addresssearch";
=======
import Plaintext from "../components/common/plaintext";
import { FontColor } from "../view/helper/typographyHelper";
import ListTile from "../components/common/listtile";
import CheckList from "../components/common/checklist";
import Calendar from "../components/common/calendar";
>>>>>>> 771b318a3447ccf5b5fd4cf0db4dda0e77584e73

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
<<<<<<< HEAD
    <AddressSearch/>
=======
    <Calendar/>
>>>>>>> 771b318a3447ccf5b5fd4cf0db4dda0e77584e73
  </PageWrapper>
);

export default Home;
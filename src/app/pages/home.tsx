import React from "react";
import Caption from "../components/common/caption";
import Title from "../components/common/title";
import PlainText from "../components/common/plainText";
import CheckBox from "../components/common/checkBox";
import ListTile from "../components/common/listTile";
import CheckList from "../components/common/checkList";
import Calendar from "../components/common/calendar";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import { FontColor, FontSize } from "../view/helper/typographyHelper";
import { Items } from "../../mock/data/items"

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <PlainText fontColor={FontColor.BlackText}>Hello, world! This is my PlainText.</PlainText>
    <div>
      {/* <ListTile title="titlelonglllllisiisisisijdlfsdfsdfs" subtitle="subtitle"/> */}
      <CheckList ListTileDatas={Items}/>
    </div>
    <Calendar/>
  </PageWrapper>
);

export default Home;

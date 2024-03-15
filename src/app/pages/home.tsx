import React from "react";
import Caption from "../components/common/caption";
import CheckBox from "../components/common/checkBox";
import CheckList from "../components/common/checkList";
import ListTile from "../components/common/listTile";
import PlainText from "../components/common/plainText";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import { FontColor } from "../view/helper/typographyHelper";
import CalendarApp from "../components/common/calendarapp";
import AddressForm from "../components/common/addressform";
import MenuBar from "../components/common/menubar";

const Home: React.FC = () => {

  // initialise parameters for the checkboxes
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(true);
  // list tile
  const initialCheckListTile = false;

  console.log("At home");

  return (

  <PageWrapper color={BackgroundColor.SubBackground}>
    <MenuBar/>
    <Title>React Tutorial</Title>
    <Caption>Aiful</Caption>
    <PlainText>Plain text</PlainText>
    <PlainText fontColor={FontColor.Error}>Plain text</PlainText>
    <CheckBox checked={checked1} setChecked={setChecked1}></CheckBox>
    <CheckBox checked={checked2} setChecked={setChecked2}></CheckBox>
    <ListTile title="List title"
              subtitle="Very Very Very Very Very Long List subtitle"
              initialCheck={initialCheckListTile} />
    <br></br>
    <CheckList width="250px"></CheckList>
    <br></br>
    <CalendarApp/>
    <AddressForm/>
  </PageWrapper>
);
}

export default Home;

import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import PhoneNumber from "../components/common/phonenumber";


const PhoneNumberPage = () => (
    <PageWrapper color={BackgroundColor.SubBackground}>
        <PhoneNumber content="電話番号"/>
    </PageWrapper>
);

export default PhoneNumberPage;
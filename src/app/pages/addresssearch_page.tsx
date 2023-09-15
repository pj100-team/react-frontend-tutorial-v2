import PageWrapper from "../components/layout/pageWrapper";
import AddressSearch from "../components/common/addresssearch";
import { BackgroundColor } from "../view/helper/layoutHelper";


const AddressSearchPage = () => (
    <PageWrapper color={BackgroundColor.SubBackground}>
        <AddressSearch/>
    </PageWrapper>
);

export default AddressSearchPage;
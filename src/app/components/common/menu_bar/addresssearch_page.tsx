import PageWrapper from "../../layout/pageWrapper";
import AddressSearch from "../address_search/addresssearch";
import { BackgroundColor } from "../../../view/helper/layoutHelper";


const AddressSearchPage = () => (
    <PageWrapper color={BackgroundColor.SubBackground}>
        <AddressSearch/>
    </PageWrapper>
);

export default AddressSearchPage;
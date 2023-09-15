import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";

const NotFoundPage = () => (
    <PageWrapper color={BackgroundColor.SubBackground}>
        <p>404 Page Not Found</p>
    </PageWrapper>
);

export default NotFoundPage;
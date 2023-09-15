import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import StopWatch from "../components/common/stopwatch";


const StopWatchPage = () => (
    <PageWrapper color={BackgroundColor.SubBackground}>
        <StopWatch/>
    </PageWrapper>
);

export default StopWatchPage;
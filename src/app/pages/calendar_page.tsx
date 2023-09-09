import PageWrapper from "../components/layout/pageWrapper";
import Calendar from "../components/common/calendar/calendar";
import { BackgroundColor } from "../view/helper/layoutHelper";


const CalendarPage = () => (
    <PageWrapper color={BackgroundColor.SubBackground}>
        <Calendar/>
    </PageWrapper>
);

export default CalendarPage;
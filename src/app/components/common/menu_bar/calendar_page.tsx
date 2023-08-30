import PageWrapper from "../../layout/pageWrapper";
import Calendar from "../calendar/calendar";
import { BackgroundColor } from "../../../view/helper/layoutHelper";


const CalendarPage = () => (
    <PageWrapper color={BackgroundColor.SubBackground}>
        <Calendar/>
    </PageWrapper>
);

export default CalendarPage;
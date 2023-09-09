import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import ToDoList from "../components/common/todolist";


const ToDoListPage = () => (
    <PageWrapper color={BackgroundColor.SubBackground}>
        <ToDoList/>
    </PageWrapper>
);

export default ToDoListPage;
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import ListTile from "./listtile";


const ToDoList = ( ) => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [contents, setContents] = useState([{
        task:"sample task",
        date:"sample deadline",
        isCompleted:false,
    }]);

    const handleSubmit = (event:any) => {
        event.preventDefault();
        if ((task !== "") && (date !== "")) {
            setContents((prevContents)=>[...prevContents, {
                task: task,
                date: date,
                isCompleted: false,
            }]);
            setDate("");
            setTask("");
            console.log(contents)
        }
    };

    const handleToggle = (index:number) => {
        const newContents = contents.map((content,key)=>
            key===index ? { ...content, isCompleted: !content.isCompleted } : { ...content }
        );
        setContents(newContents);
    }

    const handleDelete = (index:number) => {
        setContents(contents.filter((content, key)=>index !== key));
    }

    const handleDeleteAll = () => {
        setContents(contents.filter((content) => {
            return (content.isCompleted !== true)
        }))
    }

    return(
        <div css={css`width: 100%; margin: 0 auto;;`}>
            <form onSubmit={handleSubmit}>
                <label>
                    タスク：
                        <input
                            type="text"
                            value={task}
                            onChange={(event) => setTask(event.target.value)}
                        />
                </label>
                <br/>
                <label>
                    締め切り：
                        <input
                            type="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                </label>
                <input
                    type="submit"
                    value="入力"
                    css={css`
                        padding: 0.5rem 1rem 0.5rem;
                        margin: 0.5rem;
                        cursor: pointer;
                        transition-duration: 0.4s;
                        &:hover{
                            background-color: #acd8ad;
                        }
                    `}
                />
                <button
                    onClick={handleDeleteAll}
                    css={css`
                            transition-duration: 0.4s;
                            padding: 0.5rem 1rem 0.5rem;
                            margin: 0.2rem;
                            cursor: pointer;
                            &:hover{
                                background: rgb(236, 151, 151);
                            }
                    `}
                >
                    一括削除
                </button>
            </form>
            <div>
                {contents.map((content, index) => (
                    <div key={content.task}>
                        <ListTile
                            title={content.task}
                            subtitle = {content.date}
                            initialChecked={false}
                        />
                            <button
                                onClick={()=>handleDelete(index)}
                                css={css`
                                    transition-duration: 0.4s;
                                    padding: 0.5rem 1rem 0.5rem;
                                    margin: 0.2rem;
                                    cursor: pointer;
                                    &:hover{
                                        background: rgb(236, 151, 151);
                                    }
                                `}
                            >
                                    削除
                            </button>
                        <input
                            type="checkbox"
                            onChange={()=>handleToggle(index)}
                        />
                        <label>選択</label>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ToDoList;
import { useState } from "react";
import ListTile from "../ListTile";
import "./TodoList.css";

// interface Props {
//   title: number;
//   subtitle: string;
//   isActive: boolean;
//   onClick: () => void;
//   onChange: () => void;
// }

interface Todo {
  //   title: number;
  subtitle: string;
  isActive: boolean;
}

export const TodoList: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [isActive, setIsActive] = useState(false);

  const inputText = (e: any) => {
    setTodo(e.target.value);
  };

  let newTodo: Todo = {
    // title: todos.length,
    subtitle: todo,
    isActive: false,
  };

  // タスクを追加する
  const onClickAdd = () => {
    if (todo !== "") {
      setTodos([...todos, newTodo]);
      setTodo("");
      console.log(todos);
    }
  };

  // タスクを完了にする
  const onClickComplete = (i: number) => {
    console.log(i);
    const completeTodo = todos.map((todo, index) =>
      index === i ? { ...todo, isActive: !todo.isActive } : { ...todo }
    );
    setTodos(completeTodo);
  };

  // タスクを削除
  const onClickDelete = (i: number) => {
    console.log(i);
    const Todos = [...todos];
    Todos.splice(i, 1);
    setTodos(Todos);
  };

  // 完了タスクを全て削除
  const onClickCompletedDelete = () => {
    const Todos = todos.filter((todo) => todo.isActive === false);
    setTodos(Todos);
  };

  return (
    <div className="wrapper">
      <h3>TodoList</h3>
      <div>
        <input
          className="todoInput"
          type="text"
          value={todo}
          onChange={inputText}
        />
        <button onClick={onClickAdd}>追加</button>
        <button onClick={onClickCompletedDelete}>完了タスク一括削除</button>
      </div>
      <div>
        <ul className="ulList">
          {todos.map((todo, i) => (
            <div key={i} className="todolist">
              <ListTile
                // title={todo.title}
                subtitle={todo.subtitle}
                isActive={todo.isActive}
                onClick={() => onClickComplete(i)}
              />
              <button onClick={() => onClickDelete(i)} className="todoButton">
                削除
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

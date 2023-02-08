import { useState } from "react";
import ListTile from "../ListTile";
import "./TodoList.css";

interface Props {
  title: number;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
  onChange: () => void;
}

interface Todo {
  title: number;
  subtitle: string;
  isActive: boolean;
}

export const TodoList: React.FC<Props> = ({
  title,
  subtitle,
  isActive,
  onClick,
  onChange,
}) => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState([]);

  const newTodo: Todo = {
    title: todos.length,
    subtitle: todo,
    isActive: false,
  };

  const inoutText = (e: any) => {
    setTodo(e.target.value);
  };

  const onClickAdd = () => {
    if (todo !== "") {
      setTodos([newTodo, ...todos]);
      setTodo("");
      console.log(todos);
    }
  };

  return (
    <div className="wrapper">
      <h3>TodoList</h3>
      <div>
        <input
          className="todoInput"
          type="text"
          value={todo}
          onChange={inoutText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <ul className="ulList">
          {todos.map((todo) => (
            <div className="todolist">
              <ListTile
                title={todo.title}
                subtitle={todo}
                isActive={isActive}
              />
              <button className="todoButton">削除</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

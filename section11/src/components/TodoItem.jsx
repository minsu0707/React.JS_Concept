import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";
// memo메서드는 현재 props와 과거 props가 같은 값인지 또는 다른 값인지를 판단해서 컴포넌트를 리렌더링 할지말지 결정함
// -> 얕은 비교

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpDate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckBox = () => {
    onUpDate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // prevProps : 과거 props, nextProps : 현재 props
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props가 바뀌지 않음 -> 리렌더링 X
//   // F -> Props가 바뀜 -> 리렌더링 O

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);

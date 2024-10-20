import "./TodoItem.css";

export const TodoItem = ({ id, isDone, content, date, onUpDate, onDelete }) => {
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

import "./TodoItem.css";

export const TodoItem = ({ id, isDone, content, date, onUpDate }) => {
  const onChangeCheckBox = () => {
    onUpDate(id);
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
      <button>삭제</button>
    </div>
  );
};

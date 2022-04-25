import { useState, useRef } from 'react';
import './InlineEdit.css'


const InlineEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);
  const [editingBoolean, setEditingBoolean] = useState(true);
  const [isSaved,setIsSaved] = useState(false);

  const inputRef = useRef();

  const onChange = (event) => setEditingValue(event.target.value);


  const onEditClick = () => {
    setEditingBoolean(false)
    inputRef.current.focus();
  }

  const onSaveClick = () => {
    setIsSaved(true)
    setEditingBoolean(true)
    setValue(editingValue + " (E)");
  }

  const onBlur = () => {
    setEditingBoolean(true)
    setEditingValue(value)
 
  }



  return (
    <>
      <input
        aria-label="Field name"
        value={editingValue}
        onChange={onChange}
        ref={inputRef}
        onBlur={onBlur}
        className={!isSaved ? "inline-edit" : "inline-edit-red"}
      />
      {(editingBoolean ? <button className='inline-edit-edit' onClick={onEditClick}>edit</button> :
        <button className='inline-edit-save' onMouseDown={onSaveClick} >save</button>)}
   
    </>
  );
};

export default InlineEdit;
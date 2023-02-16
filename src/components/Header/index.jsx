import styles from './header.module.css';
import todologo from '../../assets/todologo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react'

export function Header({ onAddTask }) {
  const [title, setTitle] = useState('');

  //function handling handleSubmit 
  function handleSubmit(event) {
    event.preventDefault();
    
    onAddTask(title);
    setTitle('');
  }

  //every text that's typed will be saved in this state
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todologo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder='add a new task' type="text" value={title} onChange={onChangeTitle} />
        <button>
          Create
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}
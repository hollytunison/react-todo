import styles from './header.module.css';
import todologo from '../../assets/todologo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todologo} />

      <form className={styles.newTaskForm}>
        <input placeholder='add a new task' type="text" />
        <button>
          Create
          <AiOutlinePlusCircle />
        </button>
      </form>
    </header>
  )
}
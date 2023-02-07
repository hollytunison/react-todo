import styles from './header.module.css';
import todologo from '../../assets/todologo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todologo} />

      <form className={styles.newTaskForm}>
        <input placeholder='add a new task' type="text" />
      </form>
    </header>
  )
}
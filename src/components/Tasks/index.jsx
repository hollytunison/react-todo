import styles from './tasks.modules.css';

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create Tasks</p>
          <span>18</span>
        </div>

        <div>
          <p>Completed Tasks</p>
          <span>1 of 10</span>
        </div>
      </header>
    </section>
  )
}
export default Tasks
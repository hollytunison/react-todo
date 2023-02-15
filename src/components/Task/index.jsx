import styles from './task.module.css'
import {TbTrash} from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
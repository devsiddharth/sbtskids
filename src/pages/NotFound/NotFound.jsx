import { motion } from 'framer-motion'
import Button from '../../components/ui/Button/Button.jsx'
import { Cloud, Balloon, Sun } from '../../components/ui/Decor/Decor.jsx'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.decors} aria-hidden="true">
        <Sun className={styles.sun} />
        <Cloud className={styles.cloud1} />
        <Cloud className={styles.cloud2} opacity={0.7} />
        <Balloon className={styles.balloon1} color="#FF5A5F" />
        <Balloon className={styles.balloon2} color="#55D6BE" />
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className={styles.emoji} aria-hidden="true">
          🧸
        </span>
        <h1 className={styles.title}>Oops! This page went out to play.</h1>
        <p className={styles.text}>
          The page you're looking for seems to have run off to the playground. Let's get you back to
          the fun!
        </p>
        <Button to="/" variant="primary" size="lg">
          🏠 Back to Home
        </Button>
      </motion.div>
    </main>
  )
}

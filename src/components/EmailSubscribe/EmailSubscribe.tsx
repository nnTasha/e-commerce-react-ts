import styles from './EmailSubscribe.module.scss';

export default function EmailSubscribe() {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        name="input-field"
        autoComplete="off"
        placeholder="Insert your email address here"
      />
    </div>
  );
}

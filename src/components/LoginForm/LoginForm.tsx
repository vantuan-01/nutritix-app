import styles from './LoginForm.module.scss'

function LoginForm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Sign in</span>
          <button>Create an Account</button>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <label htmlFor='username'>
              User name or email
              <span className={styles.required}>*</span>
            </label>
            <input type='text' name='username' placeholder='User name' />
          </div>
          <div className={styles.content}>
            <label htmlFor='password'>
              Password
              <span className={styles.required}>*</span>
            </label>
            <input type='text' name='password' placeholder='Password' />
          </div>
          <button className={styles.login_btn}>
            <span>login</span>
          </button>
        </div>
        <div className={styles.footer}>
          <button>Lost your password?</button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

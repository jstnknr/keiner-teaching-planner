import Image from 'next/image';
import styles from './Header.module.css';

export default function Header({ onLogin }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <Image src="/assets/plnrLogo.png" alt="PLNR Logo" width={40} height={40} />
        <Image src="/assets/plnrTextLogo.png" alt="PLNR" width={120} height={40} />
      </div>
      <button onClick={onLogin} className={styles.loginBtn}>
        <Image src="/assets/loginButtonSymbol.png" alt="Login" width={24} height={24} />
      </button>
    </header>
  );
}
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoGroup}>
        <Image
          src="/assets/plnrLogo.png"
          alt="PLNR logo – return to dashboard"
          width={40}
          height={40}
        />
        <Image
          src="/assets/plnrTextLogo.png"
          alt="PLNR text logo"
          width={120}
          height={40}
        />
      </Link>
    </header>
  );
}

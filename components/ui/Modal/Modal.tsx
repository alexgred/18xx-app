'use client';

import styles from './Modal.module.css';

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>Close</button>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

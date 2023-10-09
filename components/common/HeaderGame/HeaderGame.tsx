
import NavLink from '../NavLink';
import styles from './HeaderGame.module.css';
import {
  BarChart3Icon,
  BoxIcon,
  HomeIcon,
  SettingsIcon,
  User2Icon,
} from 'lucide-react';

export default function HeaderGame() {
  const iconSize = 40;
  const iconStroke = 1;

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.navigation}`}>
        <div className={styles.menu}>
          <NavLink href="/" title="Home">
            <HomeIcon size={iconSize} strokeWidth={iconStroke} />
          </NavLink>
          <NavLink href="/1830" title="Game">
            <BoxIcon size={iconSize} strokeWidth={iconStroke} />
          </NavLink>
          <NavLink href="/1830/stats" title="Stats">
            <BarChart3Icon size={iconSize} strokeWidth={iconStroke} />
          </NavLink>
        </div>
        <div className={styles.menu}>
          <NavLink href="/login" title="Login">
            <User2Icon size={iconSize} strokeWidth={iconStroke} />
          </NavLink>
          <NavLink href="/1830/settings" title="Settings">
            <SettingsIcon size={iconSize} strokeWidth={iconStroke} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

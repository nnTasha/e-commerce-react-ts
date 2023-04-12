import { Link } from 'react-router-dom';

import { Logo } from '../../components/Logo/Logo';
import InstagramIcon from '../../icons/InstagramIcon';
import { FacebookIcon } from '../../icons/FacebookIcon';
import TwitterIcon from '../../icons/TwitterIcon';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <Logo />
      <div className={style.socialIcon}>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
      <div className={style.contacts}>
        <ul>
          <li className={style.footerItem}>
            <Link to={'/about'}>About</Link>
          </li>
          <li className={style.footerItem}>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

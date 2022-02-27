import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useWindowScroll } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) {
    return false;
  }

  return (
    <div className={styles.back_to_top} onClick={handleClick}>
      <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
    </div>
  );
};

export default ScrollToTop;

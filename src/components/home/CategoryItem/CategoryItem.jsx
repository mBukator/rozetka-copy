import React from 'react';
import styles from './CategoryItem.module.css';

function CategoryItem({ category }) {
  const { icon, href, text } = category;
  return (
    <li className={styles.category_element}>
      <a className={styles.link} href={href}>
        <span>
          <img className={styles.icon} src={icon} alt="icon" />
        </span>
        {text}
      </a>
    </li>
  );
}

export default CategoryItem;

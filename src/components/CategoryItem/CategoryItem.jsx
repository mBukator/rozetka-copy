import React from 'react'

function CategoryItem({ category }) {
  const { icon, href, text } = category;
  return (
    <li>
        <a className='sidebar__link' href={href}> <span><img src={icon} alt="icon" /></span>{text}</a>
    </li>
  )
}

export default CategoryItem
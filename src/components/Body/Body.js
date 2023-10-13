import React from 'react'
import './Body.css'

function Body() {
  return (
    <div className='layout_with_sidebar'>
      <main className='content'>
      
      </main>      
      <aside className='sidebar'>
        <div className='menu-categories'>
          <ul>
            <li><a href='index.html'>Ноутбуки та комп'ютери</a></li>
            <li><a href='index.html'>Смартфони, ТВ і електроніка</a></li>
            <li><a href='index.html'>Товари для геймерів</a></li>
            <li><a href='index.html'>Побутова техніка</a></li>
            <li><a href='index.html'>Товари для дому</a></li>
            <li><a href='index.html'>Інструменти та автотовари</a></li>
            <li><a href='index.html'>Сантехніка та ремонт</a></li>
            <li><a href='index.html'>Дача, сад і город</a></li>
            <li><a href='index.html'>Спорт і захоплення</a></li>
            <li><a href='index.html'>Одяг, взуття та прикраси</a></li>
            <li><a href='index.html'>Краса та здоров’я</a></li>
            <li><a href='index.html'>Дитячі товари</a></li>
            <li><a href='index.html'>Зоотовари</a></li>
            <li><a href='index.html'>Офіс, школа, книги</a></li>
            <li><a href='index.html'>Алкогольні напої та продукти</a></li>
            <li><a href='index.html'>Нашим захисникам</a></li>
            <li><a href='index.html'>Прайсопад знижок до 50%</a></li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Body
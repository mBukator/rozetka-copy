import React from 'react'

// CUSTOM HOOKS IMPORTS
import useFetch from '../../hooks/useFetch'

import { getAllProducts } from '../../API'

// COMPONENTS
import ItemCard from '../../components/home/ItemCard/ItemCard'
import Skeleton from './Skeleton'

import Sidebar from '../../components/home/Sidebar/Sidebar'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Home.module.css'
import './transition.css'

const Home = () => {
	const { data: products = [], isLoading } = useFetch(getAllProducts)

	return (
		<div className={styles.layout_with_sidebar}>
			<Sidebar />

			<div className={styles.main_content}>
				<div className='goods'>
					<div className='more-goods'>
						<div className={styles.goods_container}>
							<h2>Більше товарів для вибору</h2>
							<div className={styles.goods__grid}>
								<TransitionGroup component={null}>
									{isLoading
										? [...new Array(25)].map((_, index) => <Skeleton />)
										: products.map((item) => (
												<CSSTransition key={item.id} timeout={500} classNames='fade'>
													<ItemCard item={item} />
												</CSSTransition>
										  ))}
								</TransitionGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home

import { FC, useEffect, useState } from 'react'
import { Header } from './Header'

interface ismartphone {
	id: number
	title: string
	manufacturer: string
	year: string
	screen: string
	country: string
	memory: string
	updateFrequency: string
	nfc: boolean
	esim: boolean
	charger: boolean
	price: string
	image: string
}

const smartphones: ismartphone[] = [
	{
		id: Math.random(),
		title: 'Apple iPhone 12',
		manufacturer: 'Apple',
		year: '2020',
		screen: '6,1',
		country: 'Китай',
		memory: '128Гб',
		updateFrequency: '60Гц',
		nfc: false,
		esim: true,
		charger: true,
		price: '81 990 ₽',
		image: 'images/1.png',
	},
	{
		id: Math.random(),
		title: 'Xiaomi Mi 11 Lite',
		manufacturer: 'Xiaomi',
		year: '2021',
		screen: '6,55',
		country: 'Китай',
		memory: '128Гб',
		updateFrequency: '90Гц',
		nfc: true,
		esim: true,
		charger: false,
		price: '27 490 ₽',
		image: 'images/2.png',
	},
	{
		id: Math.random(),
		title: 'Samsung Galaxy A72',
		manufacturer: 'Samsung',
		year: '2021',
		screen: '6,7',
		country: 'Вьетнам',
		memory: '128Гб',
		updateFrequency: '90Гц',
		nfc: true,
		esim: false,
		charger: true,
		price: '32 890 ₽',
		image: 'images/3.png',
	},
	{
		id: Math.random(),
		title: 'Samsung Galaxy S21',
		manufacturer: 'Samsung',
		year: '2021',
		screen: '6,9',
		country: 'Вьетнам',
		memory: '256Гб',
		updateFrequency: '60Гц',
		nfc: true,
		esim: true,
		charger: true,
		price: '74 990 ₽',
		image: 'images/4.jpg',
	},
	{
		id: Math.random(),
		title: 'Apple iPhone 11',
		manufacturer: 'Apple',
		year: '2019',
		screen: '6,7',
		country: 'Китай',
		memory: '64Гб',
		updateFrequency: '90Гц',
		nfc: true,
		esim: true,
		charger: false,
		price: '49 110 ₽',
		image: 'images/5.jpg',
	},
	{
		id: Math.random(),
		title: 'Xiaomi Redmi Note 9',
		manufacturer: 'Xiaomi',
		year: '2020',
		screen: '6,8',
		country: 'Китай',
		memory: '64Гб',
		updateFrequency: '90Гц',
		nfc: true,
		esim: false,
		charger: true,
		price: '18 890 ₽',
		image: 'images/6.jpg',
	},
]

export const Main: FC = () => {
	const [amount, setAmount] = useState(3)
	const [goods, setGoods] = useState <ismartphone[]> ([])
	const [nu, setNU] = useState <ismartphone[]> ([])
	const [active, setActive] = useState(false)
	useEffect(() => {
		const goods = []
		for (let i = 0; i < amount; i++) {
			goods.push(smartphones[i])
		}
		setGoods(goods)
		setNU(smartphones.slice(amount))
	}, [amount])
	return <main className="main">
		<Header />
		<div className="container">
			<div className="wrapper">
				<div className="title">Смартфоны</div>
				<div className="amount">Количество товаров:
					<span className={amount === 2 ? 'active item' : 'item'} onClick={() => setAmount(2)}>2</span>
					<span className={amount === 3 ? 'active item' : 'item'} onClick={() => setAmount(3)}>3</span>
					<span className={amount === 4 ? 'active item' : 'item'} onClick={() => setAmount(4)}>4</span>
					<span className={amount === 5 ? 'active item' : 'item'} onClick={() => setAmount(5)}>5</span>
					<span className={amount === 6 ? 'active item' : 'item'} onClick={() => setAmount(6)}>6</span>
				</div>
			</div>
			<section>
				<div className="differences">
					<input
					type="checkbox"
					id="checkbox"
					onChange={() => setActive(!active)}
					/>
					<label htmlFor="checkbox">Показать различия</label>
				</div>
				<div className="smartphones">
					{
						goods.map(i => {
							return <div className="smartphone" key={i.id}>
								<figure>
									<img src={i.image} alt="" />
									<ul className={nu.length === 0 ? 'none' : 'arrow'}>
										<li>
											<input
											type="text"
											placeholder="Поиск"
											/>
											<div className="choice">
											{
												nu.map(j => {
													return <figure>
															<button onClick={() => {
																setGoods([...goods.map(k => k.id === i.id ? j : k)])
																setNU([...nu.filter(k => k.id !== j.id), i])
															}}><img src="images/s.png" alt="" /></button>
															<img src={j.image} alt="" width="25" height="50" />
															<figcaption>{j.title}</figcaption>
													</figure>
												})
											}
											</div>

										</li>
									</ul>
									<figcaption>{i.title}</figcaption>
								</figure>
							</div>
						})
					}
				</div>
			</section>
		</div>
		<div className="table-container">
			<table className="container">
					<tr className={active ? goods.filter(i => i.manufacturer === goods[0].manufacturer).length === goods.length ? 'none' : '' : ''}>
						<td>Производитель</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td key={i.id}>
									{
										i.manufacturer
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.year === goods[0].year).length === goods.length ? 'none' : '' : ''}>
						<td>Год релиза</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.year
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.screen === goods[0].screen).length === goods.length ? 'none' : '' : ''}>
						<td>Диагональ экрана (дюйм)</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.screen
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.country === goods[0].country).length === goods.length ? 'none' : '' : ''}>
						<td>Страна-производитель</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.country
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.memory === goods[0].memory).length === goods.length ? 'none' : '' : ''}>
						<td>Объем памяти</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.memory
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.updateFrequency === goods[0].updateFrequency).length === goods.length ? 'none' : '' : ''}>
						<td>Частота обновления экрана</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.updateFrequency
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.nfc === goods[0].nfc).length === goods.length ? 'none' : '' : ''}>
						<td>NFC</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.nfc ? <img src="images/t.png" alt="" /> : <img src="images/f.png" alt="" />
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.esim === goods[0].esim).length === goods.length ? 'none' : '' : ''}>
						<td>Поддержка ESIM</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.esim ? <img src="images/t.png" alt="" /> : <img src="images/f.png" alt="" />
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.charger === goods[0].charger).length === goods.length ? 'none' : '' : ''}>
						<td>Поддержка беспроводной зарядки</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.charger ? <img src="images/t.png" alt="" /> : <img src="images/f.png" alt="" />
									}
								</td>
							})
						}
					</tr>
					<tr className={active ? goods.filter(i => i.price === goods[0].price).length === goods.length ? 'none' : '' : ''}>
						<td>Стоимость</td>
						{
							goods.map((i: ismartphone, index) => {
								return <td>
									{
										i.price
									}
								</td>
							})
						}
					</tr>
				</table>
		</div>
	</main>
}

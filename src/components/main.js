import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import arrowUpRight from '@iconify/icons-feather/arrow-up-right'

const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 4em;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 1em;
	}
`

const Column = styled.div`
	flex: 1;
	padding: 2em;
	@media screen and (max-width: 768px) {
		padding: 1.25em;
	}
`

const RowContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
`

const Row = styled.div`flex-flow: wrap;`

export default (props) => (
	<main>
		<Container>
			<Column>
				<RowContainer>
					<Row>
						<h1>Hello, I'm Mei — a front-end developer based in Prague, Czech Republic 🇨🇿</h1>
					</Row>
					<Row className='margin-top'>
						<p className='margin-bottom'>
							I collaborate with designers to implement ideas into visuals and interactive UIs.
						</p>
						<p>
							Right now, I’m focused on digging into React and its related tools. It’s always fun to me to
							try modern technologies and to make good use of them.
						</p>
					</Row>
				</RowContainer>
			</Column>
			<Column>
				<img src='/profile.jpg' />
			</Column>
		</Container>
		<Container>
			<Column className='col mobile-hide'>
				<img src='/work.png' />
			</Column>
			<Column className='col center project-title'>
				<h1>Projects I have worked.</h1>
			</Column>
		</Container>
		<Container>
			<Column className='col lists center'>
				<p>Responsive Web Design</p>
				<p>Modern Technologies</p>
				<p>and Qualities</p>
			</Column>
			<Column className='col projects'>
				<div>
					<a href='/'>
						Online Portfolio<Icon icon={arrowUpRight} />
					</a>
					<p>My portfolio website, using Gatsby and Surge.</p>
				</div>
				<div>
					<a href='https://www.storm.mg' target='_blank'>
						Storm Media Group<Icon icon={arrowUpRight} />
					</a>
					<p>Online media platform, one of top 20 websites in Taiwan, using Ruby on Rails and Drupal.</p>
				</div>
				<div>
					<a href='http://ningselect.com' target='_blank'>
						Ning Select<Icon icon={arrowUpRight} />
					</a>
					<p>Blog with e-commerce website, using Wordpress and WooCommerce.</p>
				</div>
				<div>
					<a href='http://hong-yi.com.tw/' target='_blank'>
						Hong Yi<Icon icon={arrowUpRight} />
					</a>
					<p>Commercial website, using Wordpress and WooCommerce.</p>
				</div>
			</Column>
		</Container>
		<Container>
			<Column>
				<img src='/about.jpg' />
			</Column>
			<Column>
				<RowContainer>
					<Row>
						<h1>About me</h1>
					</Row>
					<Row className='margin-top'>
						<p className='margin-bottom'>Brave, open-minded and kind in general.</p>
						<p>
							I’m always keeping a positive mind to embrace any challenges and uncertainties. Life is
							unpredictable, so I’m trying my best to enjoy the little things and to appreciate every
							moment.
						</p>
					</Row>
				</RowContainer>
			</Column>
		</Container>
		<Container>
			<Column className='col center'>
				<h1>Any thoughts?</h1>
				<p>
					I would love to hear from you <span>🙌</span>
				</p>
			</Column>
			<Column>
				<form>
					<input type='text' name='name' placeholder='name' />
					<input type='email' name='email' placeholder='email' />
					<textarea name='message' />
					<button className={props.mode} type='submit'>
						Submit
					</button>
				</form>
			</Column>
		</Container>
	</main>
)

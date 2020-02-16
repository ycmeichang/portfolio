import React from 'react'
import styled from 'styled-components'
import './main.css'
import 'typeface-ibm-plex-serif'
import { Icon } from '@iconify/react'
import arrowUpRight from '@iconify/icons-feather/arrow-up-right'

const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 4em;
	:nth-child(2) > div:last-child,
	:nth-child(3) > div:first-child,
	:last-child > div:first-child {
		margin: auto;
	}
	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 1em;
		:nth-child(2) > div:last-child,
		:nth-child(3) > div:first-child,
		:last-child > div:first-child {
			margin: inherit;
		}
		:nth-child(2) {
			div:first-child {
				display: none;
			}
			div:last-child {
				margin-bottom: -2em;
			}
		}
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
const Row = styled.div`
	flex-flow: wrap;
	:last-child {
		margin-top: auto;
	}
	p:first-child {
		margin-bottom: 1.5em;
	}
	@media screen and (max-width: 768px) {
		p:first-child {
			margin-bottom: 1em;
		}
	}
`
const List = styled.p`
	color: #bbb;
	display: flex;
	align-items: center;
	line-height: 3em;
	:after {
		width: 3rem;
		height: 2px;
		margin-left: .85rem;
		content: "";
		background-color: #bbb;
	}
	@media screen and (max-width: 768px) {
		line-height: 2em;
	}
`
const Wrap = styled.div`
	margin-bottom: 2em;
	@media screen and (max-width: 768px) {
		margin-bottom: 1em;
	}
`

export default (props) => (
	<main>
		<Container>
			<Column>
				<RowContainer>
					<Row>
						<h1>
							Hello, I'm Mei — a front-end developer based in Prague, Czech Republic <span>🇨🇿</span>
						</h1>
					</Row>
					<Row>
						<p>I collaborate with designers to implement ideas into visuals and interactive UIs.</p>
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
			<Column>
				<img src='/work.png' />
			</Column>
			<Column>
				<h1>Projects I have worked.</h1>
			</Column>
		</Container>
		<Container>
			<Column>
				<List>Responsive Web Design</List>
				<List>Modern Technologies</List>
				<List>SEO & SMO</List>
			</Column>
			<Column>
				<Wrap>
					<p>
						<a href='/'>
							Online Portfolio<Icon icon={arrowUpRight} />
						</a>
						<br />
						My portfolio website, using Gatsby and Surge.
					</p>
				</Wrap>
				<Wrap>
					<p>
						<a href='https://www.storm.mg' target='_blank'>
							Storm Media Group<Icon icon={arrowUpRight} />
						</a>
						<br />
						Online media platform, one of top 20 websites in Taiwan, using Ruby on Rails and Drupal.
					</p>
				</Wrap>
				<Wrap>
					<p>
						<a href='http://ningselect.com' target='_blank'>
							Ning Select<Icon icon={arrowUpRight} />
						</a>
						<br />
						Blog with e-commerce website, using Wordpress and WooCommerce.
					</p>
				</Wrap>
				<Wrap>
					<p>
						<a href='http://hong-yi.com.tw/' target='_blank'>
							Hong Yi<Icon icon={arrowUpRight} />
						</a>
						<br />
						Commercial website, using Wordpress and WooCommerce.
					</p>
				</Wrap>
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
					<Row>
						<p>Brave, open-minded and kind in general.</p>
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
			<Column>
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

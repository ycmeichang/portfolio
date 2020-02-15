import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import moonIcon from '@iconify/icons-feather/moon'
import sunIcon from '@iconify/icons-feather/sun'
import mailIcon from '@iconify/icons-feather/mail'
import githubIcon from '@iconify/icons-feather/github'
import twitterIcon from '@iconify/icons-feather/twitter'
import linkedinIcon from '@iconify/icons-feather/linkedin'
import arrowUpRight from '@iconify/icons-feather/arrow-up-right'
import Layout from '../components/layout'

const Portfolio = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Column = styled.div`flex: 1;`

const RowContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
`

const Row = styled.div`flex-flow: wrap;`

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = { mode: 'light' }
	}
	handleClick = () => {
		const mode = this.state.mode
		if (mode === 'light') {
			this.setState({ mode: 'dark' })
		} else {
			this.setState({ mode: 'light' })
		}
	}
	render() {
		return (
			<div className={this.state.mode}>
				<Layout />
				<Portfolio>
					<header>
						<Container>
							<Column className='col'>
								<a href='/'>
									Mei <span>👩‍💻</span>
								</a>
							</Column>
							<Column className='col' style={{ textAlign: 'right' }}>
								<a href='mailto:meieh@pm.me'>
									<Icon icon={mailIcon} />
								</a>
								<a onClick={this.handleClick} className='margin-left'>
									{this.state.mode === 'light' && <Icon icon={moonIcon} />}
									{this.state.mode === 'dark' && <Icon icon={sunIcon} />}
								</a>
							</Column>
						</Container>
					</header>
					<main>
						<Container className='main-container'>
							<Column className='col'>
								<RowContainer>
									<Row>
										<h1>
											Hello, I'm Mei — a front-end developer based in Prague, Czech Republic 🇨🇿
										</h1>
									</Row>
									<Row className='margin-top'>
										<p className='margin-bottom'>
											I collaborate with designers to implement ideas into visuals and interactive
											UIs.
										</p>
										<p>
											Right now, I’m focused on digging into React and its related tools. It’s
											always fun to me to try modern technologies and to make good use of them.
										</p>
									</Row>
								</RowContainer>
							</Column>
							<Column className='col'>
								<img src='/profile.jpg' />
							</Column>
						</Container>
						<Container className='main-container'>
							<Column className='col mobile-hide'>
								<img src='/work.png' />
							</Column>
							<Column className='col center project-title'>
								<h1>Projects I have worked.</h1>
							</Column>
						</Container>
						<Container className='main-container'>
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
									<p>
										Online media platform, one of top 20 websites in Taiwan, using Ruby on Rails and
										Drupal.
									</p>
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
						<Container className='main-container'>
							<Column className='col'>
								<img src='/about.jpg' />
							</Column>
							<Column className='col'>
								<RowContainer>
									<Row>
										<h1>About me</h1>
									</Row>
									<Row className='margin-top'>
										<p className='margin-bottom'>Brave, open-minded and kind in general.</p>
										<p>
											I’m always keeping a positive mind to embrace any challenges and
											uncertainties. Life is unpredictable, so I’m trying my best to enjoy the
											little things and to appreciate every moment.
										</p>
									</Row>
								</RowContainer>
							</Column>
						</Container>
						<Container className='main-container'>
							<Column className='col center'>
								<h1>Any thoughts?</h1>
								<p>
									I would love to hear from you <span>🙌</span>
								</p>
							</Column>
							<Column className='col'>
								<form>
									<input type='text' name='name' placeholder='name' />
									<input type='email' name='email' placeholder='email' />
									<textarea name='message' />
									<button className={this.state.mode} type='submit'>
										Submit
									</button>
								</form>
							</Column>
						</Container>
					</main>
					<footer>
						<Container>
							<Column className='col'>
								<a href='mailto:meieh@pm.me'>
									<span>meieh@pm.me</span>
								</a>

								<a className='mobile-hide' href='https://linkedin.com/in/yuchench' target='_blank'>
									<span className='vertical-align'>
										<Icon icon={linkedinIcon} />
									</span>
								</a>
								<a className='mobile-hide' href='https://twitter.com/meiehc' target='_blank'>
									<span className='vertical-align'>
										<Icon icon={twitterIcon} />
									</span>
								</a>
								<a className='mobile-hide' href='https://github.com/meieh' target='_blank'>
									<span className='vertical-align'>
										<Icon icon={githubIcon} />
									</span>
								</a>
							</Column>
							<Column className='col' style={{ textAlign: 'right' }}>
								<span>&copy; {new Date().getFullYear()} Mei</span>
							</Column>
						</Container>
					</footer>
				</Portfolio>
			</div>
		)
	}
}

export default Index

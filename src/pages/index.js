import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Helmet from 'react-helmet'

const Portfolio = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = { mode: 'light' }
	}
	handleClick = () => {
		const mode = this.state.mode
		this.setState({ mode: mode === 'light' ? 'dark' : 'light' })
	}
	render() {
		return (
			<div className={this.state.mode}>
				<Helmet>
					<meta charSet='utf-8' />
					<title>Mei | Front-end Developer</title>
					<link rel='canonical' href='https://mei.surge.sh' />
				</Helmet>
				<Portfolio>
					<Header mode={this.state.mode} handleClick={this.handleClick} />
					<Main mode={this.state.mode} />
					<Footer />
				</Portfolio>
			</div>
		)
	}
}

export default Index

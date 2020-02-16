import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'

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

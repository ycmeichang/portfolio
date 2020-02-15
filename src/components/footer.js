import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import githubIcon from '@iconify/icons-feather/github'
import twitterIcon from '@iconify/icons-feather/twitter'
import linkedinIcon from '@iconify/icons-feather/linkedin'

const Container = styled.footer`
	display: flex;
	flex-wrap: wrap;
	margin-top: 1em;
	a {
		margin-right: 1.5em;
		font-size: 1em;
	}
	@media screen and (max-width: 768px) {
		margin-top: 1em;

		a {
			font-size: 1em;
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

export default () => (
	<Container>
		<Column>
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
		<Column style={{ textAlign: 'right' }}>
			<span>&copy; {new Date().getFullYear()} Mei</span>
		</Column>
	</Container>
)

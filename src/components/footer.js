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
`
const Column = styled.div`
	flex: 1;
	padding: 2em;
	:last-child {
		text-align: right;
	}
	a:nth-child(n + 2) {
		margin-left: 1.5em;
		vertical-align: middle;
	}
	@media screen and (max-width: 768px) {
		padding: 1.25em;
		a:nth-child(n + 2) {
			display: none;
		}
	}
`

export default () => (
	<Container>
		<Column>
			<a href='mailto:meieh@pm.me'>meieh@pm.me</a>
			<a href='https://linkedin.com/in/yuchench' target='_blank'>
				<Icon icon={linkedinIcon} />
			</a>
			<a href='https://twitter.com/meiehc' target='_blank'>
				<Icon icon={twitterIcon} />
			</a>
			<a href='https://github.com/meieh' target='_blank'>
				<Icon icon={githubIcon} />
			</a>
		</Column>
		<Column>
			<span>&copy; {new Date().getFullYear()} Mei</span>
		</Column>
	</Container>
)

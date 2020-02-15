import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import githubIcon from '@iconify/icons-feather/github'
import twitterIcon from '@iconify/icons-feather/twitter'
import linkedinIcon from '@iconify/icons-feather/linkedin'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Column = styled.div`
	flex: 1;
	padding: 2em;
`

export default () => (
	<footer>
		<Container>
			<Column>
				<a href='mailto:meieh@pm.me'>
					<span>meieh@pm.me</span>
				</a>

				<a href='https://linkedin.com/in/yuchench' target='_blank'>
					<span style={{ verticalAlign: 'middle' }}>
						<Icon icon={linkedinIcon} />
					</span>
				</a>
				<a href='https://twitter.com/meiehc' target='_blank'>
					<span style={{ verticalAlign: 'middle' }}>
						<Icon icon={twitterIcon} />
					</span>
				</a>
				<a href='https://github.com/meieh' target='_blank'>
					<span style={{ verticalAlign: 'middle' }}>
						<Icon icon={githubIcon} />
					</span>
				</a>
			</Column>
			<Column style={{ textAlign: 'right' }}>
				<span>&copy; {new Date().getFullYear()} Mei</span>
			</Column>
		</Container>
	</footer>
)

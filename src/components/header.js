import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import moonIcon from '@iconify/icons-feather/moon'
import sunIcon from '@iconify/icons-feather/sun'
import mailIcon from '@iconify/icons-feather/mail'

const Container = styled.header`
	display: flex;
	flex-wrap: wrap;
`
const Column = styled.div`
	flex: 1;
	padding: 2em;
	a {
		font-size: 1.5em;
	}
	:last-child {
		text-align: right;
		a {
			margin-left: 1em;
			vertical-align: -webkit-baseline-middle;
		}
	}
	@media screen and (max-width: 768px) {
		padding: 1.25em;
		a {
			font-size: 1.25em;
		}
	}
`

export default (props) => (
	<Container>
		<Column>
			<a href='/'>
				Mei <span>👩‍💻</span>
			</a>
		</Column>
		<Column>
			<a href='mailto:meieh@pm.me'>
				<Icon icon={mailIcon} />
			</a>
			<a onClick={props.handleClick}>
				<Icon icon={props.mode === 'light' ? moonIcon : sunIcon} />
			</a>
		</Column>
	</Container>
)

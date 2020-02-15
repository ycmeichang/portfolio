import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import moonIcon from '@iconify/icons-feather/moon'
import sunIcon from '@iconify/icons-feather/sun'
import mailIcon from '@iconify/icons-feather/mail'

const Container = styled.header`
	display: flex;
	flex-wrap: wrap;
	a {
		font-size: 1.5em;
	}
	@media screen and (max-width: 768px) {
		a {
			font-size: 1.25em;
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

export default (props) => (
	<Container>
		<Column>
			<a href='/'>
				Mei <span>👩‍💻</span>
			</a>
		</Column>
		<Column style={{ textAlign: 'right' }}>
			<a href='mailto:meieh@pm.me'>
				<Icon icon={mailIcon} />
			</a>
			<a onClick={props.handleClick} className='margin-left'>
				{props.mode === 'light' && <Icon icon={moonIcon} />}
				{props.mode === 'dark' && <Icon icon={sunIcon} />}
			</a>
		</Column>
	</Container>
)

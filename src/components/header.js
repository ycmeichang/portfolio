import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import moonIcon from '@iconify/icons-feather/moon'
import sunIcon from '@iconify/icons-feather/sun'
import mailIcon from '@iconify/icons-feather/mail'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Column = styled.div`flex: 1;`

export default (props) => (
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
				<a onClick={props.handleClick} className='margin-left'>
					{props.mode === 'light' && <Icon icon={moonIcon} />}
					{props.mode === 'dark' && <Icon icon={sunIcon} />}
				</a>
			</Column>
		</Container>
	</header>
)

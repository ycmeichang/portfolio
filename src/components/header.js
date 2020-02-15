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

const Column = styled.div`
	flex: 1;
	padding: 2em;
`

export default (props) => (
	<header>
		<Container>
			<Column>
				<span>Mei 👩‍💻</span>
			</Column>
			<Column style={{ textAlign: 'right' }}>
				<a href='mailto:meieh@pm.me'>
					<span>
						<Icon icon={mailIcon} />
					</span>
				</a>
				<a onClick={this.handleClick}>
					<span style={{ marginLeft: '1em' }}>
						{this.props.mode == 'light' && <Icon icon={moonIcon} />}
						{this.props.mode == 'dark' && <Icon icon={sunIcon} />}
					</span>
				</a>
			</Column>
		</Container>
	</header>
)

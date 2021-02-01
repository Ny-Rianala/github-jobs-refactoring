import React from 'react';
import { Header } from '../components';

export default function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Title>
                Github Jobs
            </Header.Title>
			<Header.Background>
              {children}
			</Header.Background>
		</Header>
	);
}

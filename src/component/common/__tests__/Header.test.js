import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

it('should render header', () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
});
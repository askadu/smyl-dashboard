import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

it('should render footer', () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
});
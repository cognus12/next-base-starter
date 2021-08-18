import React from 'react';
import { render, screen } from '@testing-library/react';
import { Welcome } from '../Welcom';

describe('Welcome component', () => {
  it('should render', () => {
    render(<Welcome />);

    expect(screen.getByRole('heading')).toHaveTextContent(/welcome/i);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home.component';

describe('Logo', () => {
    test('alt = "food image"', () => {
                render(<Home/>);
                    const logo = screen.getByRole('img');
                    expect(logo).toHaveAttribute('alt', 'food image');
        });
});
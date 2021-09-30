import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Query from './query';

it('CheckingInput', () => {
    const {queryByTitle} = render(<Query/>);
    const name = queryByTitle("testName")

    expect(name).toBeTruthy();
})

describe('changeInput', () => {
    it('onChange', () => {
        const {queryByTitle} = render(<Query/>);
        const name = queryByTitle("testName")
        fireEvent.change(name, {target: {value: 'testValue'}});
        expect(name.value).toBe('testValue')
    })
})
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Register from './register.component';

it("checkNameAtRegisteredComponent", () => {
    const {queryByTitle} = render(<Register/>);
    const regName = queryByTitle("testUserName");
    expect(regName).toBeTruthy();
})
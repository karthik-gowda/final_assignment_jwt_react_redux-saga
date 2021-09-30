import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from "@testing-library/react";

import Button from './button';


it("CheckButtonRender", () => {
    const {queryByTitle} =render(<Button />);

    const btn  =queryByTitle('testButton');
    expect(btn).toBeTruthy();
})


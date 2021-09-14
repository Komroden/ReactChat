import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react';

import {Message, MessageExampleTextIDs} from "./index";

describe('Message', () => {
    it('корректный заголовок', () => {

        const component = render(<Message/>);

        expect(component.queryByTestId(MessageExampleTextIDs.title)).toHaveTextContent('Hello,my name is:');

    })})
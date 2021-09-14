import React from 'react';
import {fireEvent, render, act} from '@testing-library/react';
import {Login} from "./index";
import {LoginFormTestIds} from "./index";
import {userApi} from "../../api/request";

jest.mock('../../api/request/index.js')


describe('Login', () => {

    it('корректная авторизация', () => {

        const login = 'example@example.com';
        const password = '12345678';

        const {getByTestId} = render(<Login/>)


        const loginField = getByTestId(LoginFormTestIds.loginField);
        act(() => {
            fireEvent.change(loginField, {target: {value: login}});
        })

        const passwordField = getByTestId(LoginFormTestIds.passwordField);
        act(() => {
            fireEvent.change(passwordField, {target: {value: password}});
        })

        act(() => {
            fireEvent.click(getByTestId(LoginFormTestIds.submit));
        })


        expect(userApi.login).toHaveBeenLastCalledWith(login, password);

    });

})
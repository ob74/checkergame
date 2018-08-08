import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import UsernameInput from '../../../src/components/UsernameInput'

describe('UsernameInputTest', function(){
    it('Username Input should render', function(){
        const item = renderIntoDocument(
            <UsernameInput />
        );

    //Assertions
    expect(item).toExist();
    });
});
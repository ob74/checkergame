import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import GiveUpButton from '../../../src/components/GiveUpButton'

describe('GiveUpButtonTest', function(){
    it('Give Up  Button should render', function(){
        const item = renderIntoDocument(
            <GiveUpButton />
        );

    //Assertions
    expect(item).toExist();
    });
});
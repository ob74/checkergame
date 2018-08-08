import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import StartButton from '../../../src/components/StartButton'

describe('StartButtonTest', function(){
    it('Start Button should render', function(){
        const item = renderIntoDocument(
            <StartButton />
        );

    //Assertions
    expect(item).toExist();
    });
});
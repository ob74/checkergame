import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import Turn from '../../../src/components/Turn'

describe('TurnTest', function(){
    it('Turn should render', function(){
        const item = renderIntoDocument(
            <Turn />
        );

    //Assertions
    expect(item).toExist();
    });
});
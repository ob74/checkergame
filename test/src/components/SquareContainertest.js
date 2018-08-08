import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import Square from '../../../src/components/Square'

describe('SquareTest', function(){
    it('Square should render', function(){
        const item = renderIntoDocument(
            <Square />
        );

    //Assertions
    expect(item).toExist();
    });
});
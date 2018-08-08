import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import GameTitle from '../../../src/components/GameTitle'

describe('GameTitleTest', function(){
    it('Game Title should render', function(){
        const item = renderIntoDocument(
            <GameTitle />
        );

    //Assertions
    expect(item).toExist();
    });
});
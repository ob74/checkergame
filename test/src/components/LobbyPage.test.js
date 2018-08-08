import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import LobbyPage from '../../../src/components/LobbyPage'

describe('LobbyPageTest', function(){
    it('Lobby Page should render', function(){
        const item = renderIntoDocument(
            <LobbyPage />
        );

    //Assertions
    expect(item).toExist();
    });
});
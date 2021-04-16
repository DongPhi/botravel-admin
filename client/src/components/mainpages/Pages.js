import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Admin from './admin/Admin'


function Pages() {
    return (
        <Switch>
            <Route path="/admin" exact component={Admin} />
        </Switch>
    )
}

export default Pages

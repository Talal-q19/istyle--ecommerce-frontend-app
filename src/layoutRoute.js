import React from 'react';
import { Route } from 'react-router-dom';


function LayoutRoute(props) {
    return (
        <React.Fragment>
            <Route path={props.path} exact={props.exact} component={props.component} />

        </React.Fragment>
    )
};

export default LayoutRoute;
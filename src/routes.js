import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import page_one from './page-1';
import page_two from './page-2';
import page_three from './page-3';
import page_four from './page-4';


export default class Routes extends Component {
    
    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path="/page_1" component={page_one} />
                        <Route exact path="/page_2" component={page_two} />
                        <Route exact path="/page_3" component={page_three} />
                        <Route exact path="/page_4" component={page_four} />
                    </Switch>
                </Router>
        )
    }
}
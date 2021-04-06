import React from 'react'
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom'

import { Layout } from './layout'
import * as Pages from './pages'

export const Router: React.FC = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/users" component={Pages.Users}/>
                <Redirect exact from="/" to="/users"/>
            </Switch>
        </Layout>
    </BrowserRouter>
)

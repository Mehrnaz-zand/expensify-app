
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter = () => {
    return (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={ExpenseDashboardPage}/>
                <Route exact path='/create' component={AddExpensePage}/>
                <Route exact path='/edit/:id' component={EditExpensePage}/>
                <Route exact path='/help' component={HelpPage}/>
                <Route exact  component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
    )
};


export default AppRouter;
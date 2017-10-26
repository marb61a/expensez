import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard Component
    </div>   
);

const AddExpensePage = () => (
    <div>
        Expense Component
    </div>
);

const EditExpensePage = () => (
    <div>
        Expense Edit Component
    </div>
);

const HelpPage = () => (
    <div>
        Help Component
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="edit" component={EditExpensePage} />
            <Route path="help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
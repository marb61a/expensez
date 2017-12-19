import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    
    
    return (
        <div>
            <h1></h1>
        </div>    
    );
};

const mapStateToProps = (state) => {
    
};

export default connect(mapStateToProps)(ExpensesSummary);
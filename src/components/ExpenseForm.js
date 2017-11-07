import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calenderFocused: false,
        error: ''
    }
    
    render(){
        return(
            <div>
            
            </div>
        );
    }
}
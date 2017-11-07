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
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    
    onAmountChange = (e) => {
        const amount = this.target.value;
        
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));    
        }
    }
    
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    }
    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }
    
    onSubmit = (e) => {
        e.preventDefault();
    }
    
    render(){
        return(
            <div>
            
            </div>
        );
    }
}
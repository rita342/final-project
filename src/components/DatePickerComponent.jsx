import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DatePicker, SingleDatePiker, DayPickerRangeController, DateRangePicker} from 'react-dates'
import React, { Component} from 'react';

class DatePickerComponent extends Component{

    constructor(props) {
        super(props);
        this.state={
            startDate:null,
            endDate:null
        }
    }
  
    render(){ 
    return(

<div  className="DatePiker">

   <DateRangePicker
   startDate={this.state.startDate}
 startDateId ="your_unique_start_date_id"
endDate={this.state.endDate}
endDateId="your_unique_end_date_id"
onDatesChange={({startDate,endDate})=>this.setState({startDate,endDate})}
focusedInput={this.state.focusedInput}
onFocusChange={focusedInput=>this.setState({focusedInput})}

/>

</div>
    );
    }
}
export default DatePickerComponent
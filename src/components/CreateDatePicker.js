import { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

function CreateDatePicker({ setFilterCreatedDateParam }) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
  

    const handleDateChange = (startDate, endDate) => {
        setStartDate(startDate)
        setEndDate(endDate)
         setFilterCreatedDateParam({ startDate: startDate, endDate: endDate })
    }


    return (
        <div >
            <DateRangePicker
                isOutsideRange={() => false}
                startDate={startDate}
                startDateId="start_date_id"
                endDate={endDate}
                endDateId="end_date_id"
                onDatesChange={({ startDate, endDate }) => handleDateChange(startDate, endDate)}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            />
        </div>
    );
}
export default CreateDatePicker;
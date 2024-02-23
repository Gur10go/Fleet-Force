import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarInput = ({ selectedDate, handleDateChange}) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d, yyyy"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      placeholderText="Select a date"
      className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500"
    />
  );
};

export default CalendarInput;

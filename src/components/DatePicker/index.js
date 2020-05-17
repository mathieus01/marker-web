import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  datepicker: {
    borderRadius: '5px',
    border: '1px solid #e6ecf5',
    marginTop: '1rem',
    marginBottom: '0px',

    '& div': {
      fontSize: '1.2rem',
    },
    '& div::before': {
      borderBottom: '0px',
    },
    '& div:hover:before': {
      borderBottom: '0px !important',
    },
    '& div input': {
      border: '0px !important',
      fontSize: '14px',
      padding: '12px 20px',
      lineHeight: '1.5',
      fontWeight: 400,
      color: '#8492a6',
      marginTop: '0px',
    },
  },
}));
export default function DatePicker({ name, label, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField } = useField(name);
  const [date, setDate] = useState(new Date());
  const classes = useStyles();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant='inline'
        format='dd/MM/yyyy'
        margin='normal'
        id='date-picker-inline'
        label={label}
        name={name}
        value={date}
        onChange={setDate}
        inputProps={{ ref: datepickerRef }}
        classes={{
          root: classes.datepicker,
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

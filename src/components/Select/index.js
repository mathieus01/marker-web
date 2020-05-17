import React, { useRef, useEffect, useState } from 'react';
import { Select as SelectComp, MenuItem, makeStyles } from '@material-ui/core';
import { useField } from '@unform/core';

const useStyles = makeStyles((theme) => ({
  select: {
    padding: '0.2rem',
    borderRadius: '4px',
    border: '1px solid #e6ecf5',
    fontSize: '14px',
    marginTop: '8px',
    boxShadow: 'inset 0 1px 1px rgba(31, 45, 61, 0.075)',
    color: '#8492a6',
    '&::before': {
      borderBottom: '0px',
    },
    '&:hover:before': {
      borderBottom: '0px !important',
    },
    '& div': {
      border: '0px',
      padding: '12px 20px',
      marginTop: '0px',
    },
  },
}));
const Select = ({ name, options, placeholder, value = '', ...rest }) => {
  const classes = useStyles();
  const selectRef = useRef(null);
  const [selectValue, setSelectValue] = useState(value);
  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current.node,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function handleChange(event) {
    setSelectValue(event.target.value);
  }

  return (
    <SelectComp
      className={classes.select}
      name={name}
      value={selectValue}
      onChange={handleChange}
      inputProps={{ ref: selectRef }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SelectComp>
  );
};
export default Select;

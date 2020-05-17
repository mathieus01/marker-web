import React, { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";
import Chip from "@material-ui/core/Chip";
import { Autocomplete as AutoCompleteMaterial } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";

export default function AutoComplete({
  name,
  options,
  label,
  placeholder,
  params,
  ...rest
}) {
  const autoCompleteRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    console.log("autoCompleteRef", autoCompleteRef);
    registerField({
      name: fieldName,
      ref: autoCompleteRef.current,
      path: "value"
    });
  }, [fieldName, registerField, autoCompleteRef.current]);
  return (
    <AutoCompleteMaterial
      multiple
      id="tags-standard"
      options={options}
      name={name}
      inputProps={{ ref: autoCompleteRef }}
      value={value}
      getOptionLabel={option => option.label}
      renderInput={params => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
}

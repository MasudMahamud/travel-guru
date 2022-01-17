import "date-fns";
import React from "react";
import "./From.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const shoot = () => {
  alert("Thanks for booking!");
};

export default function From(props) {
  const { title } = props.props.item;
  //console.log(title)
  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const handleCheckInDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };
  const handleCheckOutDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkOut = date;
    setSelectedDate(newDates);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TextField
        id="standard-full-width"
        label="Origin"
        style={{ margin: 8 }}
        placeholder="Your place"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        disabled
        id="standard-disabled"
        label="Destination"
        style={{ margin: 8 }}
        placeholder={title}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="From"
          value={selectedDate.checkIn}
          onChange={handleCheckInDate}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="To"
          format="dd/MM/yyyy"
          value={selectedDate.checkOut}
          onChange={handleCheckOutDate}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
      <Button
        onClick={shoot}
        className="start-book-btn"
        variant="contained"
        color="primary"
      >
        Start Booking
      </Button>
    </MuiPickersUtilsProvider>
  );
}

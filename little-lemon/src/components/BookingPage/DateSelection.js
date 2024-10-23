import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { fetchAPI } from "../../api/customApi.js";

function DateSelection({ formData, setFormData, nextStep }) {
  const [date, setDate] = useState(() =>
    formData.date ? new Date(formData.date) : new Date()
  );
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(formData.time || "");

  useEffect(() => {
    const defaultDate = formData.completeDate
      ? new Date(formData.completeDate)
      : new Date();

    const fetchInitialTimes = async () => {
      try {
        const currentDateTimes = await fetchAPI(defaultDate);
        setAvailableTimes(currentDateTimes);
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };

    fetchInitialTimes();
  }, [formData.completeDate]);

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      const today = new Date();
      return date < today.setHours(0, 0, 0, 0);
    }
    return false;
  };

  const handleDateChange = async (selectedDate) => {
    const utcDate = new Date(
      Date.UTC(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      )
    );
    setDate(utcDate);

    setFormData((prev) => ({
      ...prev,
      completeDate: utcDate,
      date: utcDate.toISOString().split("T")[0],
    }));

    try {
      const randomTimes = await fetchAPI(utcDate);
      setAvailableTimes(randomTimes);
      setSelectedTime("");
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setSelectedTime(event.target.value);
    setFormData((prev) => ({
      ...prev,
      time: selectedTime,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      completeDate: date,
      date: date.toISOString().split("T")[0],
      time: selectedTime,
    });
    nextStep();
  };

  return (
    <>
      <div className="choose-date">
        <h1>Choose a Date</h1>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileDisabled={tileDisabled}
          prev2Label={null}
          next2Label={null}
        />
        <br />
      </div>
      <div className="pick-time">
        <h1>Pick Available Time</h1>
        <select
          className="select-time"
          value={selectedTime}
          onChange={handleTimeChange}
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No available times
            </option>
          )}
        </select>
      </div>
      <div className="btn-div">
        <div></div>
        <button
          onClick={handleNext}
          className="btn-next"
          disabled={!selectedTime}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default DateSelection;

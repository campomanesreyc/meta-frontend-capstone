import React, { useState, useEffect } from "react";
import DateSelection from "./DateSelection.js";
import FormDetails from "./FormDetails.js";
import ReviewDetails from "./ReviewDetails.js";
import Confirmation from "./Confirmation.js";
import { submitAPI } from "../../api/customApi.js";

function BookingForm({ restName }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    completeDate: "",
    date: "",
    time: "",
    size: "",
    occasion: "",
    seating: "",
    fee: "",
    request: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    cardNum: "",
    expDate: "",
    cvvcvc: "",
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  useEffect(() => {});

  const handleSubmit = async () => {
    try {
      const response = await submitAPI(formData);
      if (response) {
        setStep(4);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting form. Please try again.");
      setStep(3);
    }
  };

  return (
    <>
      {step === 1 && (
        <DateSelection
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <FormDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <ReviewDetails
          formData={formData}
          prevStep={prevStep}
          onSubmit={handleSubmit}
        />
      )}
      {step === 4 && <Confirmation formData={formData} restName={restName} />}
    </>
  );
}
export default BookingForm;

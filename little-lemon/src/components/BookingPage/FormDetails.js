import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormDetails({ formData, setFormData, nextStep, prevStep }) {
  const validationSchema = Yup.object({
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    size: Yup.string().required("Party Size is required"),
    fee: Yup.string().required("Fee is required"),
    occasion: Yup.string().required("Occasion is required."),
    seating: Yup.string().required("Seating is required."),
    firstName: Yup.string()
      .min(2, "First Name is too short.")
      .required("First Name is required."),
    lastName: Yup.string()
      .min(2, "Last Name is too short.")
      .required("Last Name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    phoneNum: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(10, "Number too short. Minimum of 10 digits")
      .max(12, "Number too long. Maximum of 12 digits")
      .required("Phone number is required."),
    cardNum: Yup.string()
      .matches(/^[0-9]+$/, "Card number must contain only digits")
      .min(13, "Card number too short. Minimum of 13 digits")
      .max(19, "Card number too long. Maximum of 19 digits")
      .required("Card is required."),
    expDate: Yup.string().required("Expiry date is required."),
    cvvcvc: Yup.string()
      .matches(/^[0-9]+$/, "CVV/CVC must contain only digits")
      .min(3, "CVV/CVC too short. Minimum of 3 digits")
      .max(4, "CVV/CVC too long. Maximum of 4 digits")
      .required("CVV/CVC is required."),
  });

  const feeStructure = {
    "Small (1-4 people)": "$50",
    "Medium (5-8 people)": "$100",
    "Large (9+ people)": "$150",
  };

  return (
    <>
      {" "}
      <Formik
        initialValues={{
          ...formData,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setFormData(values);
          setSubmitting(false);
          nextStep();
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => {
          const fee = feeStructure[values.size] || "$0";
          return (
            <Form>
              <div className="header-label">
                <h1>Reservation Details</h1>
                <div className="partition"></div>
                <p>
                  To confirm your reservation, we require a deposit based on
                  your party size. This amount will be deducted from your total
                  bill at the end of your visit. No additional charges apply.
                  Thank you for your understanding!
                </p>
              </div>
              <div className="form-div">
                <label htmlFor="date">Date:</label>
                <Field
                  className="field-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  readOnly
                />
              </div>

              <div className="form-div">
                <label htmlFor="time">Time:</label>
                <Field type="text" name="time" value={formData.time} readOnly />
              </div>

              <div className="form-div">
                <label htmlFor="size">Party Size:</label>
                <Field
                  as="select"
                  name="size"
                  defaultValue=""
                  onChange={(e) => {
                    const { value } = e.target;
                    setFieldValue("size", value);
                    setFieldValue("fee", feeStructure[value] || "$0");
                  }}
                >
                  <option value="" disabled>
                    Select Size
                  </option>
                  <option value="Small (1-4 people)">Small (1-4 people)</option>
                  <option value="Medium (5-8 people)">
                    Medium (5-8 people)
                  </option>
                  <option value="Large (9+ people)">Large (9+ people)</option>
                </Field>
                <div></div>
                <ErrorMessage name="size" component="div" />
              </div>

              <div className="form-div">
                <label htmlFor="fee">Fee:</label>
                <Field type="text" name="fee" value={fee} readOnly />
              </div>

              <div className="form-div">
                <label htmlFor="occasion">Occasion:</label>
                <Field as="select" name="occasion" defaultValue="">
                  <option value="" disabled>
                    Select Occasion
                  </option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Family Gathering">Family Gathering</option>
                  <option value="Romantic Dinner">Romantic Dinner</option>
                  <option value="Business Meetings">Business Meetings</option>
                  <option value="Casual Dining">Casual Dining</option>
                  <option value="Other">Other</option>
                </Field>
                <div></div>
                <ErrorMessage name="occasion" component="div" />
              </div>

              <div className="form-div">
                <label htmlFor="seating">Seating:</label>
                <Field as="select" name="seating" defaultValue="">
                  <option value="" disabled>
                    Select Seating
                  </option>
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                </Field>
                <div></div>
                <ErrorMessage name="seating" component="div" />
              </div>

              <div className="form-div">
                <label htmlFor="request">Special Request: (Optional)</label>
                <Field
                  as="textarea"
                  className="field-request"
                  name="request"
                  rows="4"
                  cols="50"
                />
              </div>

              <div className="header-label">
                <h1>Customer Details</h1>
                <div className="partition"></div>
              </div>

              <div className="form-div">
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" name="firstName" />
                <div></div>
                <ErrorMessage name="firstName" component="div" />
              </div>

              <div className="form-div">
                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" name="lastName" />
                <div></div>
                <ErrorMessage name="lastName" component="div" />
              </div>

              <div className="header-label">
                <h1>Contact Information</h1>
                <div className="partition"></div>
              </div>

              <div className="form-div">
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" />
                <div></div>
                <ErrorMessage name="email" component="div" />
              </div>

              <div className="form-div">
                <label htmlFor="phoneNum">Phone Number:</label>
                <Field type="tel" name="phoneNum" />
                <div></div>
                <ErrorMessage name="phoneNum" component="div" />
              </div>

              <div className="header-label">
                <h1>Payment Information</h1>
                <div className="partition"></div>
              </div>

              <div className="form-div">
                <label htmlFor="cardNum">Card Number:</label>
                <Field type="cardNum" name="cardNum" />
                <div></div>
                <ErrorMessage name="cardNum" component="div" />
              </div>

              <div className="form-div">
                <label htmlFor="expDate">Expiry Date:</label>
                <Field type="expDate" name="expDate" placeholder="MM/YYYY" />
                <div></div>
                <ErrorMessage name="expDate" component="div" />
              </div>

              <div className="form-div">
                <label htmlFor="cvvcvc">CVV/CVC:</label>
                <Field type="cvvcvc" name="cvvcvc" />
                <div></div>
                <ErrorMessage name="cvvcvc" component="div" />
              </div>

              <div className="btn-div">
                <button type="button" className="btn-back" onClick={prevStep}>
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default FormDetails;

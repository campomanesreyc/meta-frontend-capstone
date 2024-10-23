function ReviewDetails({ formData, prevStep, onSubmit }) {
  const dateObject = new Date(formData.date);

  const formattedDate = dateObject.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatCardNumber = (cardNumber) => {
    const lastFourDigits = cardNumber.slice(-4);
    const censoredPart = "*".repeat(cardNumber.length - 4);

    const formattedCensoredPart =
      censoredPart.match(/.{1,4}/g)?.join(" ") || "";

    return `${formattedCensoredPart} ${lastFourDigits}`;
  };

  const formatCvvCvc = (cvvcvc) => {
    const censored = "*".repeat(cvvcvc.length);

    return censored;
  };

  return (
    <div>
      <div className="header-label">
        <h1>Review your Details</h1>
        <div className="partition"></div>
      </div>
      <div className="details">
        <p>
          <span className="label">Date: </span>
          {formattedDate}
        </p>
        <p>
          <span className="label">Time: </span>
          {formData.time}
        </p>
        <p>
          <span className="label">Party Size: </span>
          {formData.size}
        </p>
        <p>
          <span className="label">Fee: </span>
          {formData.fee}
        </p>
        <p>
          <span className="label">Occasion: </span>
          {formData.occasion}
        </p>
        <p>
          <span className="label">Seating: </span>
          {formData.seating}
        </p>
        <p>
          <span className="label">Special Request: </span>
          {formData.request !== "" ? formData.request : "N/A"}
        </p>
        <p>
          <span className="label">First Name: </span>
          {formData.firstName}
        </p>
        <p>
          <span className="label">Last Name: </span>
          {formData.lastName}
        </p>
        <p>
          <span className="label">Email: </span>
          {formData.email}
        </p>
        <p>
          <span className="label">Phone Number: </span>
          {formData.phoneNum}
        </p>
        <p>
          <span className="label">Card Number: </span>
          {formatCardNumber(formData.cardNum)}
        </p>
        <p>
          <span className="label">Expiry Date: </span>
          {formData.expDate}
        </p>
        <p>
          <span className="label">CVV/CVC: </span>
          {formatCvvCvc(formData.cvvcvc)}
        </p>
        <p className="terms">
          By making this reservation, you agree to our Terms and Conditions,
          including our cancellation policy and privacy practices.
        </p>
      </div>

      <div className="btn-div">
        <button className="btn-edit" onClick={prevStep}>
          Edit
        </button>
        <button className="btn-submit" onClick={onSubmit}>
          Reserve Now
        </button>
      </div>
    </div>
  );
}
export default ReviewDetails;

import checkImg from "../../images/check.png";

function Confirmation({ formData, restName }) {
  return (
    <section className="confirmation-div">
      <div className="img-div">
        <img src={checkImg} alt="check" />
        <h1>Reservation Successful</h1>
        <p>
          Thank you <span>{formData.firstName}</span>, for reserving a table at{" "}
          {restName}. Your reservation has been confirmed.
        </p>
        <br />
        <p>
          You will receive a <span>confirmation email</span> at{" "}
          <span>{formData.email}</span> shortly with all the details of your
          reservation. If you need to make any changes or cancel your
          reservation, please refer to the instructions in the confirmation
          email.
        </p>
        <br />
        <p>We look forward to serving you!</p>
      </div>
    </section>
  );
}
export default Confirmation;

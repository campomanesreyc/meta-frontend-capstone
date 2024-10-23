import "../../styles/BookingPage.css";
import BookingForm from "./BookingForm";
import Footer from "../Footer";

function BookingSection({ restName, address, phoneNum, email }) {
  return (
    <>
      <section className="booking">
        <div className="header">
          <h1>Reserve a Table</h1>
        </div>
        <div className="booking-section">
          <div className="booking-form">
            <BookingForm restName={restName} />
          </div>
          <div className="rest-info">
            <div className="header-label">
              <h1>Little Lemon</h1>
              <div className="partition"></div>
            </div>
            <div className="info-div">
              <ul>
                <li>123 Citrus Avenue, Chicago, IL 60601 </li>
                <li>(555) 123-4567</li>
                <li>info@littlelemon.com</li>
              </ul>
            </div>

            <div className="header-label">
              <h1>Our Location</h1>
              <div className="partition"></div>
            </div>
            <div className="info-div">
              <iframe
                title="courera-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.0457042469307!2d-79.37994192898799!3d43.65134753601167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb21150c4af9%3A0xef8ac6b77762b6c7!2sCoursera!5e0!3m2!1sen!2sph!4v1729661171260!5m2!1sen!2sph"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="header-label">
              <h1>Opening Hours</h1>
              <div className="partition"></div>
            </div>
            <div className="info-div">
              <p>Mon–Fri: 12:00 PM – 10:00 PM </p>
              <p>Sat–Sun: 10:00 AM – 11:00 PM </p>
            </div>

            <div className="header-label">
              <h1>Reservation Policy</h1>
              <div className="partition"></div>
            </div>
            <div className="info-div">
              <ul>
                <li>Maximum of 6 guests per table. </li>
                <li>
                  Please arrive on time, as we can hold reservations for 15
                  minutes only.
                </li>
              </ul>
            </div>

            <div className="header-label">
              <h1>Cancellation Policy</h1>
              <div className="partition"></div>
            </div>
            <div className="info-div">
              <p>
                Cancellations must be made 24 hours in advance to avoid a $25
                fee.
              </p>
            </div>

            <div className="header-label">
              <h1>Parking and Accessbility</h1>
              <div className="partition"></div>
            </div>
            <div className="info-div">
              <ul>
                <li>Street parking and nearby garage available.</li>
                <li>2 blocks from Main St. Subway Station.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer address={address} phoneNum={phoneNum} email={email} />
      </footer>
    </>
  );
}
export default BookingSection;

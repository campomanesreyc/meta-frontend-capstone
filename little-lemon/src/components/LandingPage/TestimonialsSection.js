import React from "react";
import Testimonials from "./Testimonials";
import review1 from "../../images/review1.jpg";
import review2 from "../../images/review2.jpg";
import review3 from "../../images/review3.jpg";
import review4 from "../../images/review4.jpg";

function TestimonialsSection() {
  const review = [
    {
      id: 1,
      rating: 5,
      custName: "Emily Davis",
      photo: review1,
      review:
        "Little Lemon is my go-to place for delicious Mediterranean food. The flavors are authentic, and the service is always top-notch. I can't recommend it enough!",
    },
    {
      id: 2,
      rating: 4,
      custName: "James Wilson",
      photo: review2,
      review:
        "A great spot with a cozy vibe. The food is fresh and flavorful, though the wait time can be a bit long during peak hours. Still, definitely worth a visit.",
    },
    {
      id: 3,
      rating: 5,
      custName: "Sarah Patel",
      photo: review3,
      review:
        "The best dining experience I've had in a while! Every dish was bursting with flavor, and the staff made us feel right at home. Little Lemon exceeded my expectations!",
    },
    {
      id: 4,
      rating: 4,
      custName: "Michael Thompson",
      photo: review4,
      review:
        "The food at Little Lemon is absolutely amazing. While the service could be a bit quicker, the quality of the meals more than makes up for it. Will be returning soon.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="grid-item">
        <h1>Testimonials</h1>
      </div>
      <div className="grid-item">
        {review.map((testimonials) => (
          <Testimonials key={review.id} {...testimonials} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;

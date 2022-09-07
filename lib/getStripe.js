import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LXdzDSHhvS05bMcDnsGJZrpe2lkuMI7a27Ge6kjVaUHemYY7b3AJcrbbGBFwpOGxwvGHHNcaEFFTT9oRVLI4rTZ00MBN0Fg17"
    );
  }

  return stripePromise;
};

export default getStripe;

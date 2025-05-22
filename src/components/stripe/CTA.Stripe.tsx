import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { CTA } from "@/_design/CTA";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_WEBSITE_URL;
const SESSION_URL = "api/v1/checkout/stripe";

interface CheckoutFormProps {
  name: string;
  customerEmail: string;
  customerName: string;
  amount: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  name,
  amount,
  customerEmail,
  customerName,
}) => {
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    console.log("Sending data to API:", {
      name,
      amount,
      customerEmail,
      customerName,
    });

    try {
      const res = await fetch(`${BACKEND_URL}/${SESSION_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          amount,
          customerEmail,
          customerName,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const session = await res.json();

      const result = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        setError(result.error.message || "An unknown error occurred");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <CTA variant="primary" isDisabled={loading}>
          Chargement...
        </CTA>
      ) : (
        <CTA variant="secondary">Passer commande</CTA>
      )}
    </form>
  );
};

const Checkout: React.FC<{
  name: string;
  amount: number;
  customerEmail: string;
  customerName: string;
}> = ({ name, amount, customerEmail, customerName }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm
      name={name}
      amount={amount + 4.99 + 2.75}
      customerEmail={customerEmail}
      customerName={customerName}
    />
  </Elements>
);

export default Checkout;

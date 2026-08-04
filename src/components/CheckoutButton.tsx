import { goToCheckout } from "../config";

interface CheckoutButtonProps {
  location: string;
  children: React.ReactNode;
  className?: string;
}

export default function CheckoutButton({
  location,
  children,
  className,
}: CheckoutButtonProps) {
  return (
    <button
      type="button"
      className={`btn-primary ${className ?? ""}`}
      onClick={() => goToCheckout(location)}
    >
      {children}
    </button>
  );
}

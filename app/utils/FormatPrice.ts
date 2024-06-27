export function formatPrice(number: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "KWD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number);
  }
  
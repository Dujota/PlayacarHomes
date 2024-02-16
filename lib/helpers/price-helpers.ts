export function formatPrice(price: number | string | undefined) {
  let formattedPrice;

  if (typeof price !== 'number') {
    formattedPrice = Number(price);

    if (!formattedPrice || isNaN(formattedPrice)) return '';
  } else {
    formattedPrice = price;
  }

  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(formattedPrice || 0);
}

export function formatMXN(price: number | string | undefined) {
  const options = {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  const numberFormat = new Intl.NumberFormat('es-MX', options);

  let formattedPrice;

  if (typeof price !== 'number') {
    formattedPrice = Number(price);

    if (!formattedPrice || isNaN(formattedPrice)) return '';
  } else {
    formattedPrice = price;
  }

  return `${numberFormat.format(formattedPrice)} MXN`;
}

export function unitPrice(price: number | string | undefined, period = 1): number | string {
  let unitPrice;
  unitPrice;

  if (typeof price !== 'number') {
    unitPrice = Number(price);

    if (!unitPrice || isNaN(unitPrice)) return '';
  } else {
    unitPrice = price;
  }

  if (period) {
    return unitPrice / period;
  }

  return unitPrice as number;
}

// BOOKING PRICING
// calculate weekly price based on daily price and weekly discount
export function calculateWeeklyPrice(pricePerDay: string | number, weeklyDiscount: number): string {
  // Convert daily price to a number
  const dailyPrice = Number(pricePerDay);
  // Check for valid number
  if (isNaN(dailyPrice)) return '';

  // Calculate the total price for 7 days
  const totalPrice = dailyPrice * 7;
  // Calculate discount amount
  const discountAmount = totalPrice * (weeklyDiscount / 100);
  // Calculate final price after discount
  const finalPrice = totalPrice - discountAmount;

  // Format the final price
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(finalPrice);
}

// calculate monthly price based on daily price and monthly discount
export function calculateMonthlyPrice(pricePerDay: string | number, monthlyDiscount: number): string {
  // Convert daily price to a number

  const dailyPrice = Number(pricePerDay);
  // Check for valid number
  if (isNaN(dailyPrice)) return '';

  // Assuming a month is roughly 30 days
  const daysInMonth = 30;
  // Calculate the total price for 30 days
  const totalPrice = dailyPrice * daysInMonth;
  // Calculate discount amount
  const discountAmount = totalPrice * (monthlyDiscount / 100);
  // Calculate final price after discount
  const finalPrice = totalPrice - discountAmount;

  // Format the final price
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(finalPrice);
}

const coupons = [
  {
    name: "coupon321",
    discount: 20,
  },
  {
    name: "coupon543",
    discount: 30,
  },
  {
    name: "coupon289",
    discount: 40,
  },
];

const getDiscountPriceByCoupon = (price, coupon) => {
  try {
    const { discount } = coupons.find((item) => item.name === coupon);
    var finalPrice = (price * (100 - discount)) / 100;
    return console.log(`The final price is: USD${finalPrice}`);
  } catch (error) {
    return console.error(new Error(`The coupon ${coupon} is not valid`));
  }
};
getDiscountPriceByCoupon(2450, "coupon321");

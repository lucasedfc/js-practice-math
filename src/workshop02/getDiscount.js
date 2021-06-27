const getDiscountPrice = (price, discount) => {
    var finalPrice = (price * (100 - discount)) / 100;
    return finalPrice;
};
console.log(`The final price is:  ${getDiscountPrice(2450, 20)}`);

const calculatePrice = () => {
    const price = document.querySelector("#inputPrice").value;
    const discount = document.querySelector("#inputDiscount").value;
    const finalPrice =  getDiscountPrice(price, discount);
    const resultInput = document.querySelector("#resultPrice");
    resultInput.innerText = `The final price is ${finalPrice}`;
}
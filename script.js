const pirveliValuta = document.getElementById("currency-one");
const pirveliInputi = document.getElementById("amount-one");
const meoreValuta = document.getElementById("currency-two");
const meoreInputi = document.getElementById("amount-two");
const kursiEl = document.getElementById("rate");
const swapGilaki = document.getElementById("swap");

const calculate = () => {
  const pirveliValutaValue = pirveliValuta.value;
  const meoreValutaValue = meoreValuta.value;

  fetch("https://open.exchangerate-api.com/v6/latest")
    .then((res) => res.json())
    .then((data) => {
      const kursi =
        data.rates[meoreValutaValue] / data.rates[pirveliValutaValue];
      kursiEl.innerText = `1 ${pirveliValutaValue} = ${kursi} ${meoreValutaValue}`;
      meoreInputi.value = (pirveliInputi.value * kursi).toFixed(2);
    })
    .catch((err) => console.error(err));
};

pirveliValuta.addEventListener("change", calculate);
pirveliInputi.addEventListener("input", calculate);
meoreValuta.addEventListener("change", calculate);
meoreInputi.addEventListener("input", calculate);

swapGilaki.addEventListener("click", () => {
  const droebiti = pirveliValuta.value;
  pirveliValuta.value = meoreValuta.value;
  meoreValuta.value = droebiti;
  calculate();
});
calculate();

// const currencyEl_one = document.getElementById("currency-one");
// const amountEl_one = document.getElementById("amount-one");
// const currencyEl_two = document.getElementById("currency-two");
// const amountEl_two = document.getElementById("amount-two");
// const rateEl = document.getElementById("rate");
// const swap = document.getElementById("swap");

// function calculate() {
//   const currency_one = currencyEl_one.value;
//   console.log(currency_one);
//   const currency_two = currencyEl_two.value;
//   fetch("https://open.exchangerate-api.com/v6/latest")
//     .then((res) => res.json())
//     .then((data) => {
//       //  console.log(data);
//       console.log(data.rates["GEL"]);
//       const rate = data.rates[currency_two] / data.rates[currency_one];
//       rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
//       amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
//     });
// }

// // Event Listener
// currencyEl_one.addEventListener("change", calculate);
// amountEl_one.addEventListener("input", calculate);
// currencyEl_two.addEventListener("change", calculate);
// amountEl_two.addEventListener("input", calculate);

// swap.addEventListener("click", () => {
//   const temp = currencyEl_one.value;
//   currencyEl_one.value = currencyEl_two.value;
//   currencyEl_two.value = temp;
//   calculate();
// });

// calculate();

// const person = {
//   age: 10,
//   name: "gurami",
//   suranme: "jinoria",
//   dob: "16-02-2025",
// };
// console.log();

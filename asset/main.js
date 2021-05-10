$(document).ready(function(){
const table = [
  {
    name: "Saphir",
    fruit: "kiwi",
    animal: "Koal",
  },
  {
    name : "Wiam",
    fruit : "Orange",
    animal : "dog"
  },
  {
    name: "Louiza",
    fruit: "Datte",
    animal: "Neat",
  },
  {
    name: "Olga",
    fruit: "Mangue",
    animal: "Cat",
  },
  {
    name: "Katherine",
    fruit: "Raspberry",
    animal: "Cat",
  },
];
const createTd = (key, value) => {
  const $el = document.createElement("td");
  $el.classList.add(`input-${key}`);
  $el.innerText = value;
  return $el;
};

table.forEach((input) => {
  const $input = document.createElement("tr");
  $input.classList.add("input");
  //$input.
  $input.appendChild(createTd("name", input.name));
  $input.appendChild(createTd("fruit", input.fruit));
  $input.appendChild(createTd("animal", input.animal));

  document.querySelector("tbody").appendChild($input);
});


});

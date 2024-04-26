let optionList = document.querySelector('select').options;

let options = [
  {
    text: 'Наличными',
    value: 'Value 1'
  },
  {
    text: 'Рефинансирование',
    value: 'Value 2'
  },
  {
    text: 'На автомобиль',
    value: 'Value 3'
  },
  {
    text: 'Под залог',
    value: 'Value 4'
  },
  {
    text: 'Образовательный',
    value: 'Value 5'
  },
  {
    text: 'Образовательный',
    value: 'Value 6'
  },
  {
    text: 'На ремонт',
    value: 'Value 7',
    selected: true
  }
];

options.forEach(option =>
  optionList.add(
    new Option(option.text, option.value, option.selected)
  )
);
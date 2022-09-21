# testProdvigaeff
Тестовое задание JS Developer для Prodvigaeff.ru

## Задание № 1
// Напишите функцию, которая принимает произвольное
// количество аргументов типа string|number
// и возвращает их сумму или конкатенирует
// их по правилам js
// 1,2,3 => 6
// 1,2,'3' => '33'
// '1',2,3 => '123'
export function sum(a, b) {
  return a + b;
}

## Задание № 2
export function spy(forSpy) {
  // Написать функцию,
  // которая принимает на вход функцию
  // И возвращает пару функций в виде объекта:
  // функцию spied, которая ведет себя
  // точно так же, как исходная
  // и функцию total, которая позволяет определить,
  // какое количество раз функция spied вызывалась
  // с конкретным аргументом
  // const {spied:max, total:totalMax} = spy(Math.max);
  // console.log(max(1, 2, 3)) => 3
  // console.log(max(1, 2, 3, 4)) => 4
  // console.log(totalMax(1)) => 2
  // console.log(totalMax(4)) => 1
  // console.log(totalMax(0)) => 0
  return { spied: forSpy, total: () => 0 };
}
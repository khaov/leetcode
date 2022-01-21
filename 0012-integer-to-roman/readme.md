Алгоритм просматривает `romanMap` от наибольшего к наименьшему, начиная с `M` до `I`, и отслеживает переменную `result`.

Основной алгоритм использует деление `num` на `romanMap[key]` и оператор модуля.

Разделение говорит нам, сколько конкретных символов нам нужно повторить. А оператор модуля помогает нам изменить число.

Самый простой способ понять это решение — посмотреть на пример. Давайте представим, что нам нужно преобразовать `2439`:

```
Math.floor(2439 / 1000) = 2
result += M.repeat(2) = MM
2439 = 2439 % 1000 = 439

Math.floor(439 / 900) = 0
result += CM.repeat(0) = MM
439 = 439 % 900 = 439

Math.floor(439 / 500) = 0
result += D.repeat(0) = MM
439 = 439 % 900 = 439

Math.floor(439 / 400) = 1
result += CD.repeat(1) = MMCD
439 = 439 % 400 = 39

Math.floor(39 / 100) = 0
result += C.repeat(0) = MMCD
39 = 39 % 100 = 39

Math.floor(39 / 90) = 0
result += XC.repeat(0) = MMCD
39 = 39 % 90 = 39

Math.floor(39 / 50) = 0
result += L.repeat(0) = MMCD
39 = 39 % 50 = 39

Math.floor(39 / 40) = 0
result += XL.repeat(0) = MMCD
39 = 39 % 40 = 39

Math.floor(39 / 10) = 3
result += X.repeat(3) = MMCDXXX
39 = 39 % 10 = 9

Math.floor(9 / 9) = 1
result += IX.repeat(1) = MMCDXXXIX
9 = 9 % 9 = 0

Math.floor(0 / 5) = 0
result += V.repeat(0) = MMCDXXXIX
0 = 0 % 5 = 0

Math.floor(0 / 4) = 0
result += IV.repeat(0) = MMCDXXXIX
0 = 0 % 4 = 0

Math.floor(0 / 1) = 0
result += I.repeat(0) = MMCDXXXIX
0 = 0 % 1 = 0
```

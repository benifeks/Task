function matrix(n) {
    // создаём структуру матрицы заполняя пустыми строками
    let result = new Array(n).fill().map(() => new Array(n).fill(""));

    /* или так (массив пустых массивов):
		result = [];
     	while(result.push([]) < n);  */

    /*  или так (массив пустых массивов):
    for (let i = 0; i < n; i++) {
        result.push([]);
      } */

    console.log(result);
    // переменные для управления заполнением структуры
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    // создаём цикл и устанавливаем предел его работы
    while (startRow <= endRow && startColumn <= endColumn) {
      //заполняем первый ряд (result[0])
      for (let i = startColumn; i <= endColumn; i++) {
        result[startRow][i] = counter;
        counter++;
      }
      startRow++;
      //console.log(result);
      // поворачиваем вниз(последний элемент оставшихся подмассивов)
      for (let i = startRow; i <= endRow; i++) {
        result[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
      //console.log(result);
      //нижний ряд(поледний подмассив)
      for (let i = endColumn; i >= startColumn; i--) {
        result[endRow][i] = counter;
        counter++;
      }
      endRow--;
      //console.log(result);
      // завершаем виток 
      for (let i = endRow; i >= startRow; i--) {
        result[i][startColumn] = counter;
        counter++;
      }
      startColumn++;

    }
    console.log(result);
    return result;
  }

  function launchMatrix() {

    let arr = matrix(+prompt('Введите размер матрицы'));
    let table = document.querySelector("table");

    arr.forEach((itemTr, i) => {
      let tr = document.createElement("tr");
      itemTr.forEach((itemTd, ii) => {
        let td = document.createElement("td");
        td.textContent = arr[i][ii];
        tr.append(td);
      });
      table.append(tr);
    });
  }

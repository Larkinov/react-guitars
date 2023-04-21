import "../scss/components/Sort.scss";

function Sort() {
  return (
    <form>
      <label htmlFor="sort-guitar">Сортировка по: </label>
      <select name="sort" id="sort-guitar" className="select-sort">
        <option value="popularity">популярности</option>
        <option value="cost-min">цене (возв)</option>
        <option value="cost-max">цене (убыв)</option>
        <option value="alphabet">алфавиту</option>
      </select>
    </form>
  );
}

export default Sort;

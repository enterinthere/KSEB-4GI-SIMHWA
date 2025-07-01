function MenuDisplay({ arr }) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {arr.map(({ mno, name, price }) => (
        <li
          key={mno}
          className="bg-white list-none rounded-2xl shadow-md p-4 border hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">메뉴 번호: {mno}</p>
          <p className="text-lg font-semibold text-blue-600 mt-1">
            {price.toLocaleString()}원
          </p>
        </li>
      ))}
    </ul>
  );
}

export default MenuDisplay;

import MenuDisplay from "./menuDisplay";

function KioskContainer() {
  const menus = [
    { mno: 1, name: '짜장면', price: 8000 },
    { mno: 2, name: '짬뽕', price: 9000 },
    { mno: 3, name: '볶음밥', price: 9800 },
    { mno: 4, name: '울면', price: 8500 },
    { mno: 5, name: '덴푸라', price: 18000 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">🍜 메뉴판</h2>
      <MenuDisplay arr={menus} />
    </div>
  );
}

export default KioskContainer;

    

 
// Bài tập 3
const sanPham = [
  { ma: "SP001", ten: "Điện thoại Samsung A55", gia: 8500000, conHang: true },
  { ma: "SP002", ten: "Tai nghe Sony WH-1000XM5", gia: 6200000, conHang: false },
  { ma: "SP003", ten: "Laptop Dell Inspiron 15", gia: 18900000, conHang: true },
  { ma: "SP004", ten: "Chuột Logitech MX Master 3", gia: 1950000, conHang: true },
  { ma: "SP005", ten: "Bàn phím Keychron K2", gia: 2300000, conHang: false },
  { ma: "SP006", ten: "Màn hình LG 27UP850", gia: 12400000, conHang: true },
];

const danhSachTen = sanPham.map((sp) => sp.ten);
console.log("Danh sách tên sản phẩm:");
danhSachTen.forEach((ten, i) => console.log(`${i + 1}. ${ten}`));

const conHang = sanPham.filter((sp) => sp.conHang);
console.log("\nSản phẩm còn hàng:");
conHang.forEach((sp) => console.log(`- ${sp.ten} | ${sp.gia.toLocaleString("vi-VN")} đ`));

const tongGiaTri = sanPham.reduce((tong, sp) => tong + sp.gia, 0);
console.log("\nTổng giá trị kho:", tongGiaTri.toLocaleString("vi-VN"), "đồng");

const tongConHang = conHang.reduce((tong, sp) => tong + sp.gia, 0);
console.log("Tổng giá trị còn hàng:", tongConHang.toLocaleString("vi-VN"), "đồng");

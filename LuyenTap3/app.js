// Bài tập 2 – Import và sử dụng destructuring

import sinhVien from "./student.js";
import { hoTen, lop, nganhHoc, namHoc } from "./student.js";
//Destructuring 
const { hoTen: ten, lop: tenLop, nganhHoc: nganh, namHoc: nam } = sinhVien;

console.log("=== Thông tin sinh viên (từ default export + destructuring) ===");
console.log("Họ tên  :", ten);
console.log("Lớp     :", tenLop);
console.log("Ngành   :", nganh);
console.log("Năm học :", nam);

console.log("\n=== Thông tin sinh viên (từ named export) ===");
console.log("Họ tên  :", hoTen);
console.log("Lớp     :", lop);
console.log("Ngành   :", nganhHoc);
console.log("Năm học :", namHoc);

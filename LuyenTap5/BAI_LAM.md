# Bài làm Luyện tập 5 - React Native

## A. Câu hỏi ôn tập lý thuyết

### 1. Native thread, JavaScript thread và Shadow thread

JavaScript thread chạy mã React/JavaScript, xử lý state, props, logic ứng dụng và phản ứng với các sự kiện. Shadow tree là biểu diễn trung gian của giao diện; Yoga tính toán kích thước và vị trí các phần tử theo Flexbox. Native/UI thread quản lý các view thật của Android hoặc iOS và đưa kết quả cuối cùng lên màn hình.

Có thể hiểu luồng phối hợp như sau: JavaScript quyết định cần hiển thị gì, phần Shadow/Yoga tính toán layout, sau đó native renderer cập nhật giao diện thật. Khi người dùng thao tác, sự kiện được tiếp nhận và có thể làm thay đổi state, từ đó tạo ra lần render tiếp theo.

### 2. Luồng render View và Text

Khi JavaScript trả về `View` và `Text`, React xây dựng cây component và xác định các thay đổi. React Native renderer tạo biểu diễn giao diện tương ứng, Yoga tính toán layout dựa trên các thuộc tính style/Flexbox, sau đó thay đổi được commit và mount vào các native view của Android hoặc iOS.

React Native tạo giao diện gần ứng dụng native vì các component cốt lõi như `View` và `Text` không phải thẻ HTML; chúng được ánh xạ tới hạ tầng giao diện native của từng nền tảng.

### 3. Vai trò của JSI và Yoga

JSI (JavaScript Interface) là lớp giao tiếp giữa JavaScript và phần C++/native trong kiến trúc React Native hiện đại. JSI là nền tảng cho Fabric và TurboModules, giúp giảm phụ thuộc vào cơ chế Bridge tuần tự hóa dữ liệu của kiến trúc cũ.

Yoga là engine layout. Yoga áp dụng các quy tắc Flexbox để tính kích thước, vị trí, margin, padding và căn chỉnh của từng node. JavaScript quyết định UI cần có, Shadow tree/Yoga tính layout và native renderer hiển thị kết quả.

### 4. Chuẩn bị build trên Android thật

Các bước:

1. Cài Node.js và dependencies của project.
2. Cài Android Studio, Android SDK và Platform Tools.
3. Bật Developer Mode trên điện thoại.
4. Bật USB Debugging.
5. Cắm cáp USB hỗ trợ dữ liệu.
6. Cho phép máy tính gỡ lỗi qua hộp thoại RSA.
7. Giữ điện thoại mở khóa.
8. Chạy `adb devices`.
9. Đảm bảo trạng thái thiết bị là `device`.
10. Chạy Metro và `npx react-native run-android`.

Developer Mode mở các tính năng dành cho nhà phát triển. USB Debugging cho phép ADB giao tiếp với thiết bị. `adb devices` xác nhận thiết bị đã được nhận diện và được cấp quyền. Giữ máy mở khóa giúp người dùng thấy và chấp nhận hộp thoại RSA/quyền cài đặt khi cần.

### 5. So sánh Android và iOS

Android có thể phát triển trên Windows, macOS hoặc Linux. Công cụ chính gồm Android Studio, Android SDK, JDK, ADB và emulator/điện thoại Android.

Để build iOS native cần macOS và Xcode. Khi chạy trên iPhone thật cần cấu hình code signing; Apple ID hoặc Apple Developer account được dùng tùy mục đích phát triển/phân phối. Xcode và iOS Simulator không được hỗ trợ chính thức trên Windows, vì vậy build iOS native thực tế phải thực hiện trên macOS.

## B. Bài tập luyện tập thực hành

### Bài 1 - Mức dễ

Khi người dùng mở ứng dụng, Android khởi tạo Activity và React Native runtime. JavaScript thread tải mã React và chạy component chính. React Native tạo mô tả giao diện; Shadow tree cùng Yoga tính kích thước và vị trí các phần tử. Sau đó native renderer cập nhật các view thật và hiển thị chúng. Khi người dùng thao tác, sự kiện có thể làm thay đổi state và kích hoạt quá trình cập nhật giao diện tiếp theo.

### Bài 2 - Mức dễ đến trung bình

Code nằm trong `App.js`:

```jsx
import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
    </View>
  );
}
```

`View` dùng làm container. `Text` hiển thị văn bản. Style căn giữa nội dung và định dạng chữ. React Native renderer chuyển cây React thành các thành phần giao diện native tương ứng trên Android/iOS.

### Bài 3 - Checklist Android thật

- [ ] Cài Android Studio và Android SDK.
- [ ] Cài Android SDK Platform Tools/ADB.
- [ ] Bật Developer Mode.
- [ ] Bật USB Debugging.
- [ ] Kết nối cáp USB hỗ trợ truyền dữ liệu.
- [ ] Chấp nhận quyền RSA trên điện thoại.
- [ ] Giữ điện thoại mở khóa.
- [ ] Chạy `adb devices`.
- [ ] Xác nhận trạng thái là `device`.
- [ ] Chạy `npm install`.
- [ ] Chạy Metro bằng `npm start`.
- [ ] Terminal khác chạy `npx react-native run-android`.
- [ ] Nếu cần chạy `adb reverse tcp:8081 tcp:8081`.

Nếu không nhận thiết bị, cần kiểm tra cáp, driver, USB Debugging và ADB. Nếu hiện `unauthorized`, mở khóa điện thoại và chấp nhận RSA. Nếu hiện `offline`, restart ADB và kết nối lại. Khi điện thoại bị khóa, hộp thoại cấp quyền có thể không được xác nhận nên quá trình build/cài đặt có thể thất bại.

# Luyện tập 5 - React Native

Đây là project React Native CLI hoàn chỉnh cho bài luyện tập 5. Phần thực hành hiển thị **Hello React Native** bằng `View` và `Text`, đồng thời có đầy đủ project Android để build và chạy trên thiết bị thật.

## Cấu trúc chính

```text
LuyenTap5/
├── App.js
├── BAI_LAM.md
├── README.md
├── package.json
├── app.json
├── index.js
├── babel.config.js
├── metro.config.js
├── android/
│   ├── app/
│   ├── gradle/
│   ├── gradlew
│   ├── gradlew.bat
│   └── ...
└── __tests__/
```

Project dùng React Native **0.87.1** và phần Android được lấy từ template chính thức **React Native Community 0.87-stable**.

## Yêu cầu môi trường

- Node.js >= 22.11.0
- Android Studio
- Android SDK / Platform Tools
- USB driver phù hợp nếu dùng Windows
- Điện thoại Android đã bật Developer Mode và USB Debugging

Template Android hiện dùng:

- Build Tools: 37.0.0
- compileSdk: 37
- targetSdk: 36
- minSdk: 24
- Gradle: 9.4.1

## Cài dependencies

Từ thư mục repository:

```bash
cd LuyenTap5
npm install
```

## Kiểm tra điện thoại Android

Cắm điện thoại bằng cáp USB, mở khóa máy, cho phép USB Debugging rồi chạy:

```bash
adb devices
```

Kết quả đúng có dạng:

```text
List of devices attached
XXXXXXXXXXXX    device
```

Nếu hiện `unauthorized`, mở khóa điện thoại và bấm **Allow/Cho phép** ở hộp thoại RSA.

## Chạy Metro

Terminal 1:

```bash
npm start
```

## Build và chạy Android

Terminal 2:

```bash
npm run android
```

Hoặc đúng câu lệnh đề bài:

```bash
npx react-native run-android
```

Nếu điện thoại thật không kết nối được Metro:

```bash
adb reverse tcp:8081 tcp:8081
```

## Kết quả mong đợi

Ứng dụng mở ra và hiển thị:

```text
Hello React Native
```

ở chính giữa màn hình.

## Giải thích App.js

- `View`: vùng chứa giao diện.
- `Text`: hiển thị văn bản.
- `StyleSheet`: khai báo style.
- `flex: 1`: chiếm toàn bộ vùng màn hình.
- `alignItems: "center"`: căn giữa theo chiều ngang.
- `justifyContent: "center"`: căn giữa theo chiều dọc.
- `fontSize`, `fontWeight`, `color`: định dạng chữ.

## Lỗi thường gặp

### Không thấy thiết bị trong adb

```bash
adb kill-server
adb start-server
adb devices
```

Kiểm tra lại cáp USB, driver, USB Debugging và chế độ truyền dữ liệu.

### unauthorized

Mở khóa điện thoại, chấp nhận khóa RSA rồi chạy lại `adb devices`.

### offline

Rút/cắm lại cáp, restart ADB và giữ điện thoại mở khóa.

### Không kết nối Metro

```bash
adb reverse tcp:8081 tcp:8081
```

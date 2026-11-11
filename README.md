# STEMEE — 60 năm ký ức qua thẻ NFC

Trang triển lãm STEM song ngữ của Trường THPT Hoàng Văn Thụ, giới thiệu 19 hiện vật bằng ảnh, thẻ tên NFC, thuyết minh Web Speech API và các giải thích khoa học.

Danh mục mô tả các hiện vật theo nội dung thực tế của 19 ảnh, giữ nguyên thứ tự tệp: ví dụ `tt1.jpg` là tạp chí và `tt14.jpg` là đĩa kỷ niệm. Có thể cập nhật mô tả hoặc thay ảnh trong Studio.

## Chạy tại chỗ

Đây là ứng dụng tĩnh, không cần cài gói hay bước build. Mở `index.html` trực tiếp hoặc chạy máy chủ tĩnh:

```sh
python3 -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`. Mở thẳng hiện vật bằng `?id=tt1` đến `?id=tt19`; các đường dẫn NFC cũ vẫn được hỗ trợ. Khi mở trực tiếp bằng `file:`, ứng dụng dùng bộ dữ liệu mặc định được nhúng trong `app.js`; để xem nội dung đã thay đổi trong `data/items.json`, hãy chạy máy chủ tĩnh.

## In và ghi thẻ

Chọn **In thẻ NFC** để in các thẻ gấp khổ A4; bản in không sử dụng mã QR. Trong trang, chọn **Sao chép URL NFC** trên một kỷ vật rồi ghi URL nhận được vào thẻ NTAG213/215 bằng ứng dụng NFC Tools.

## GitHub Pages

Workflow tại `.github/workflows/static.yml` bật GitHub Pages nếu cần và triển khai nội dung tĩnh khi có thay đổi trên nhánh `main` hoặc khi chạy thủ công từ tab **Actions**. Nếu repository không cấp quyền tự bật Pages, trong **Settings → Pages** hãy chọn nguồn **GitHub Actions**. Sau khi workflow hoàn tất, trang dự án có địa chỉ dạng `https://<owner>.github.io/STEMEE/`.

## CMS / Studio

Mở Studio qua nút khóa ở footer hoặc `?admin=true`. Đây là công cụ chỉnh sửa trên trình duyệt, **không phải xác thực hay kiểm soát truy cập**. Bật **Chế độ chỉnh sửa nhanh** để mở trực tiếp biểu mẫu từ mỗi thẻ. Chọn nhiều ảnh trong lưới, nhập mỗi đường dẫn hoặc URL trên một dòng, hoặc tải ảnh lên để tự động nén; ảnh đầu tiên là ảnh bìa. Nhấn **Thêm sản phẩm mới**, điền tên Việt/Anh và lưu để tạo ID tiếp theo.

Lưu cục bộ chỉ áp dụng cho trình duyệt và thiết bị hiện tại. Bộ sưu tập đã chỉnh theo ảnh dùng khóa `stemee-items-v3`; các bản nháp cũ trong `stemee-items-v1` và `stemee-items-v2` được giữ nguyên, không tự động nhập vì có thể chứa mô tả sai. Để khôi phục, sao chép giá trị của khóa cũ từ Local Storage trong công cụ phát triển trình duyệt vào một tệp JSON, rồi nhập tệp đó qua Studio; việc nhập thay thế bản nháp hiện tại, nên hãy xuất bản sao lưu trước. Dung lượng lưu trữ có giới hạn, đặc biệt với ảnh tải lên; ứng dụng sẽ báo lỗi nếu không thể lưu. Xuất JSON để sao lưu hoặc thay `data/items.json`; nhập JSON để khôi phục. Nút đồng bộ yêu cầu nhấn hai lần và thay bản nháp hiện tại bằng dữ liệu đã triển khai (hoặc dữ liệu nhúng khi dùng `file:`).

Để xuất bản, cung cấp token GitHub có quyền ghi Contents của repository và nhánh đích. Token chỉ dùng trong phiên trình duyệt, không được lưu; tệp JSON được ghi vào `data/items.json` và việc triển khai phụ thuộc cấu hình GitHub Pages của repository. Ảnh tải lên được nhúng trong JSON; đường dẫn tương đối như `./photos/tt20.jpg` yêu cầu tệp ảnh tương ứng đã tồn tại trong repository. Không chia sẻ token với người khác.

# STEMEE — 60 năm ký ức qua thẻ NFC

Trang triển lãm STEM song ngữ của Trường THPT Hoàng Văn Thụ, giới thiệu tám kỷ vật học trò qua thẻ tên NFC, thuyết minh bằng Web Speech API và các giải thích khoa học.

## Chạy tại chỗ

Đây là ứng dụng tĩnh, không cần cài gói hay bước build. Mở `index.html` trực tiếp hoặc chạy máy chủ tĩnh:

```sh
python3 -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`. Để mở thẳng một kỷ vật, thêm `?id=luu-but`, `?id=casio`, `?id=dien-thoai`, `?id=sach-giao-khoa`, `?id=lo-sao`, `?id=cap-long`, `?id=coi-da` hoặc `?id=banh-day`.

## In và ghi thẻ

Chọn **In thẻ NFC** để in các thẻ gấp khổ A4; bản in không sử dụng mã QR. Trong trang, chọn **Sao chép URL NFC** trên một kỷ vật rồi ghi URL nhận được vào thẻ NTAG213/215 bằng ứng dụng NFC Tools.

## GitHub Pages

Workflow tại `.github/workflows/static.yml` bật GitHub Pages nếu cần và triển khai nội dung tĩnh khi có thay đổi trên nhánh `main` hoặc khi chạy thủ công từ tab **Actions**. Nếu repository không cấp quyền tự bật Pages, trong **Settings → Pages** hãy chọn nguồn **GitHub Actions**. Sau khi workflow hoàn tất, trang dự án có địa chỉ dạng `https://<owner>.github.io/STEMEE/`.

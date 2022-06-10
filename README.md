# Bài tập lớn CSDL

## Thành viên:

### *Hoàng Minh Nhật - 20020063*
### *Đoàn Duy Tùng - 20020070*
### *Nguyễn Ngọc Ninh - 20020263*

## Mô tả ứng dụng web:

### Tên ứng dụng: ***Mạng xã hội NTN***

### Database:

![ntnDB](/docs/ntnDB_EER_diagram.png)

### Chức năng chính: 
- Đã hoàn tiện:
    - Đăng nhập, Đăng xuất tài khoản
    - Đăng bài viết, Đăng ảnh.
    - Chỉnh sửa bài viết
    - Bình luận bài viết.
    - Thả tim bài viết.
    - Tìm kiếm người dùng khác qua username.
    - Tìm kiếm bài viết qua hashtag.
    - Cập nhật, chỉnh sửa thông tin cá nhân.

- Dự định phát triển:
    - Kết bạn.
    - Đăng video cho post
    - Chỉnh sửa bình luận
    - Chỉnh sửa thông tin tài khoản
    - Chức năng nhắn tin

### Cài đặt:
### *Clone repo:*

> `git clone https://github.com/FMLPhongVan/NTN.com`

### *Frontend:*

#### Yêu cầu:

*Cần cài đặt sẵn Nodejs*

#### Cài đặt và chạy Frontend:

> `D:\NTN\client> npm i`

*Nếu có lỗi, hãy thử:*
> `D:\NTN\client> npm i --force`

*Sau đó chạy lệnh:*
> `D:\NTN\client> npm run start`

*Cửa sổ terminal sẽ hiển thị:*

    You can now view client in the browser.
    
      Local:            http://localhost:3000
      On Your Network:  http://192.168.56.1:3000
    
    Note that the development build is not optimized.
    To create a production build, use npm run build.
    
    webpack compiled successfully
    Files successfully emitted, waiting for typecheck results...
    Issues checking in progress...
    No issues found.
    
*Chú ý:* Ngoài ra, có thể build qua lệnh 

>`D:\NTN\client> npm build` 

*Rồi chạy lệnh:*

>`D:\NTN\client> npm install -g serve`

>`D:\NTN\client> serve -s build`

*Cửa sổ terminal sẽ hiển thị:*

       ┌──────────────────────────────────────────────────┐
       │                                                  │
       │   Serving!                                       │
       │                                                  │
       │   - Local:            http://localhost:3000      │
       │   - On Your Network:  http://192.168.56.1:3000   │
       │                                                  │
       │   Copied local address to clipboard!             │
       │                                                  │
       └──────────────────────────────────────────────────┘
       
Sau khi làm một trong hai cách trên ta có thể truy cập vào trang web qua `http://localhost:3000`

### *Backend:*

#### Yêu cầu:

*Cần cài đặt sẵn Composer*

#### Cài đặt và chạy Backend:

# aws
    User: phatdev 
    Access key ID: AKIATPJUEBDVYSJXQA6S 
    Secret access key: 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


    export AWS_ACCESS_KEY_ID=AKIATPJUEBDVYSJXQA6S
    export AWS_SECRET_ACCESS_KEY=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

# Serverless Framework

Serverless Framework là một CLI (Command Line Interface) mã nguồn mở mà hỗ trợ cho chúng ta triển khai các ứng dụng không có máy chủ.

## Cài serverless ở global bằng lệnh:
    npm install -g serverless

## Check serverless:
    serverless -v hoặc sls -v

## Tạo một project serverless node.js:
    sls create --template aws-nodejs --path crud-cats --name crud-cats

Trong đó:

–-template: là tên của mẫu kiến trúc có sẵn.
    ref: https://serverless.com/framework/docs/providers/aws/cli-reference/create/

–-path: tên đường dẫn đến thư mục source code

–-name: tên của service trong file serverless.yml

## Sau khi tạo thành công, cau truc thu muc se la:

    1) .gitignore: khai báo những tập tin không được push lên server.

    2) handler.js: Là nơi ta sẽ định nghĩa các hàm lambda (Lambda Function).

    3) serverless.yml: Là nơi ta sẽ khai báo cấu hình cho ứng dụng, file này thường có 3 phần chính sau:

        - Provider: công khai các cấu hình cụ thể cho nhà cung cấp dịch vụ Cloud, ví dụ như cấu hình tên nhà cung cấp, môi trường runtime, khu vực sử dụng…

        - Functions: sẽ chỉ định các Function logic chức năng tại đây.

        - Resources: sẽ khai báo các tài nguyên để cho các Functions của bạn sử dụng được. Tài nguyên sẽ được khai báo bởi một dịch vụ của AWS có tên là CloudFormation.

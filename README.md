# Intermedia Photo Spot MVP v42 - 内部QR生成版

## v42で修正したこと
- 外部QRサービスを廃止
- `/api/qr` でVercel内QR生成に変更
- Blob URLを `/api/qr?data=...` に渡してQR PNGを生成
- QR表示の外部依存をなくしました
- 「画像を開く」リンクは継続

## 追加ファイル
- api/qr.js

## package.json 追加依存
- qrcode

## テスト
1. GitHubへv42の中身を上書きアップロードしてCommit
2. VercelのDeployがReadyになるまで待つ
3. 撮影
4. 「QRでスマホ保存できます」が表示される
5. QRが表示される
6. QRを読み取るとBlob画像URLが開く

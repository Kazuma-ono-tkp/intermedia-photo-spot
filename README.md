# Intermedia Photo Spot MVP v36 - Blob安全版

## v36で修正したこと
- 撮影処理とBlobアップロード処理を分離
- 撮影完了画面への遷移を最優先
- Blobアップロードは撮影完了画面表示後にバックグラウンド実行
- API連携に失敗しても撮影自体は止まらない
- QRアップロード失敗時は従来の写真保存導線にフォールバック

## API連携について
Vercelに以下の構成でデプロイされていれば、自動で `/api/upload` と連携します。

- index.html
- package.json
- api/upload.js
- assets/intermedia_logo_transparent.png

Blob Store作成後、`BLOB_READ_WRITE_TOKEN` が対象プロジェクトの環境変数に入っている必要があります。

## 確認してほしいこと
1. 撮影ボタン後、撮影完了画面へ進むか
2. 画像が表示されるか
3. その後QRが更新されるか
4. QRアップロード失敗時も写真に保存できるか
v36 test

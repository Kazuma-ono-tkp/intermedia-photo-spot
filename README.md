# Intermedia Photo Spot MVP v43 - 撮影アプリ完成度向上 + QR必須版

## v43で強化したこと
- QRは必須機能としてVercel内部API `/api/qr` で生成
- 外部QRサービスは使用しません
- 撮影後にBlobへJPEGアップロード
- Blob URL取得後、QR画像を表示
- 「画像を開く」リンクを継続
- 「リンクコピー」ボタンを追加
- QR生成状態を見える化
- 完成画面のQR表示サイズ・余白を調整
- QR生成に失敗しても画像リンクは残る設計

## 必要ファイル
- index.html
- package.json
- api/upload.js
- api/qr.js
- assets/intermedia_logo_transparent.png

## GitHub更新手順
1. このZIPを解凍
2. 中身をGitHubリポジトリへ上書きアップロード
3. Commit
4. Vercelが自動デプロイ
5. Ready後に撮影テスト

## テスト項目
1. 撮影後、Blobにjpgが保存される
2. 「QRでスマホ保存できます」が表示される
3. QR画像が表示される
4. QRを読み取るとBlob画像が開く
5. 「リンクコピー」が動く

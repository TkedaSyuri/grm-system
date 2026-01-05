# Guest Room Monitor（リネン管理システム）

> ビジネスホテル向けの **客室状況管理・清掃業務支援・連絡システム** です。  
> フロントスタッフと清掃員の間でリアルタイムに情報共有が可能です。

---

## 概要
ホテル業務の効率化を目的としたリネンシステムです。  
客室の清掃状況や作業内容の更新、フロント・清掃員間のリアルタイムな連絡を行えます。

---

## 主な機能

| 機能 | 説明 |
|------|------|
| 客室状況の確認 | 客室ごとのステータス（清掃中・完了など）をリアルタイムで確認可能 |
| 客室状況の変更 | 清掃員が作業完了後にステータスを更新 |
| 清掃員の業務管理 | フロントスタッフのみが清掃タスクの追加・削除を実行可能 |
| 相互連絡機能 | フロントスタッフと清掃員の間でメッセージをリアルタイム送受信 |
| 認証機能 | JWTによるユーザー認証（Cookieでセッション管理） |

---

## 操作方法

### 1. ログイン
画面右上の「フロントスタッフはこちらへ」からログインします。  
アカウントの新規登録とログインができます。
デバッグ用ログインをご利用ください。

### 2. 客室管理
- 各客室の状態（清掃前 / 清掃中 / 清掃完了など）をリアルタイムに確認可能。
- 状況をクリックするとモーダルが表示され、そこから変更できます。

### 3. タスク管理
- フロントスタッフ：清掃業務の追加・削除が可能。
- 清掃員：受け取ったタスクの状態を変更可能。

### 4. チャット機能
- フロント・清掃員間でリアルタイムでのメッセージ送信が可能。

---

##  使用技術

### フロントエンド
- 言語：TypeScript  
- フレームワーク：Next.js  
- ライブラリ：Redux / Socket.IO / Zod / React Hook Form  

### インフラ・その他
- フロントエンドホスティング：Vercel 

---

##  サイトリンク

**デモサイト：**  
https://gest-room-moniter.vercel.app

> 注意：  
> Render（無料枠）の仕様により、初回アクセス時に**約1分の待機時間**が発生することがあります。

---

## GitHub リポジトリ

### リンク

| フロントエンド | [https://github.com/TkedaSyuri/grm-system](https://github.com/TkedaSyuri/grm-system) |



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

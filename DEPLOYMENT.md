# Firebase 部署教學

## 本地開發
```bash
npm run dev
```

## 部署到 Firebase
1. 登入 Firebase
```bash
firebase login
```

2. 初始化專案 (如果還沒初始化)
```bash
firebase init
```

3. 建構專案
```bash
npm run generate
```

4. 部署到 Firebase
```bash
firebase deploy
```

## 功能說明
- ✅ Firebase Authentication (電子郵件/密碼登入)
- ✅ Firebase Firestore (資料庫)
- ✅ 使用者註冊/登入系統
- ✅ 個人資料管理頁面
- ✅ 資料隔離 (每個使用者的資料分開儲存)
- ✅ 響應式設計 (支援手機和桌面)

## 資料欄位
個人資料包含以下欄位：
- 姓名 (必填)
- 綽號
- 學歷
- 科系
- 身高 (cm)
- 體重 (kg)
- 專長
- 興趣

所有資料都會儲存在 Firebase Firestore 中，每個使用者的資料完全分開。

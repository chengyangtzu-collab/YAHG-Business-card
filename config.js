// ===== 只要改這個檔案就能換成別人的名片 =====
window.CARD = {
  // LINE Developers 建立 LIFF 後拿到的 ID（例如 2008xxxxxx-AbCdEfGh）
  liffId: "請填入LIFF_ID",

  // 部署後的網址（Netlify 網址，結尾不要加 /）
  siteUrl: "https://yahg-business-card.netlify.app",

  name: "鄭仰慈",
  nameEn: "Yang Cheng",
  title: "創辦人・餐飲數位顧問",
  company: "心成行",
  companyEn: "XIN CHENG",
  slogan: "幫店家把客人接住：官方 LINE ＋ 官網 ＋ 線上點餐",
  avatarText: "仰", // 沒有大頭照時，圓圈裡顯示的字

  phone: "0930309690",
  email: "CHENGYANGTZU@gmail.com",
  avatarImg: "avatar.jpg", // 大頭照檔名（和 index.html 放同一層）
  lineId: "@089eompd",
  website: "https://xin-cheng-consulting.netlify.app",
  instagram: "https://www.instagram.com/xincheng.tw",

  // 第 2 張：服務
  serviceTitle: "先接住客人，再談系統",
  serviceDesc: "從客人怎麼找到你、怎麼下單、會不會再回來，一起規劃適合你的店的做法",
  services: [
    "官方 LINE 建置與圖文選單",
    "LINE 自動回覆（15／30 句）",
    "品牌官網＋線上點餐",
    "取餐通知推播",
    "會員集點、熟客回訪",
    "AI 小編（LINE／IG 私訊）",
    "美髮美甲線上預約"
  ],
  serviceButton: "看服務方案",

  // 第 3 張：資源
  resourceTitle: "給店家老闆的資源",
  resourceDesc: "準備開店、或正在經營的你",
  resources: [
    { title: "免費電子書", desc: "《客人一直都在，只是你沒接到》看漏掉的客人在哪裡" },
    { title: "店家健診", desc: "傳「我想健診」到官方 LINE，幫你檢查哪裡在流失客人" },
    { title: "實際案例", desc: "KUN 崐 韓醬炸雞：官網、線上點餐、LINE 取餐通知" }
  ],
  resourceButton: "逛心成行官網",

  // 配色
  color: {
    main: "#1F3A34",   // 深綠
    accent: "#E3B76B", // 金色按鈕
    soft: "#F3EFE6",   // 淺米底
    text: "#22302C",
    sub: "#6B7570"
  }
};

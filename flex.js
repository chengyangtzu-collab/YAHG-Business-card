// 依 config.js 組出 LINE Flex Message（三張滑動卡片）
window.buildFlex = function (C) {
  const c = C.color;
  const liffUrl = "https://liff.line.me/" + C.liffId;
  const lineUrl = "https://line.me/R/ti/p/" + encodeURIComponent(C.lineId);

  const header = (sub) => ({
    type: "box", layout: "vertical", backgroundColor: c.main, paddingAll: "18px",
    contents: [
      { type: "text", text: C.company, color: "#FFFFFF", weight: "bold", size: "xl" },
      { type: "text", text: sub, color: c.accent, size: "xxs", margin: "xs" }
    ]
  });

  const btn = (label, uri, style) => ({
    type: "button", height: "sm", style: style || "link", color: c.main,
    action: { type: "uri", label, uri }
  });

  const primaryBtn = (label, uri) => ({
    type: "box", layout: "vertical", backgroundColor: c.accent, cornerRadius: "8px",
    paddingAll: "10px", action: { type: "uri", label, uri },
    contents: [{ type: "text", text: label, align: "center", weight: "bold", color: c.main, size: "sm" }]
  });

  const row = (k, v) => ({
    type: "box", layout: "baseline", spacing: "md",
    contents: [
      { type: "text", text: k, size: "xs", color: c.sub, flex: 2 },
      { type: "text", text: v, size: "xs", color: c.text, flex: 6, wrap: true }
    ]
  });

  const info = [row("公司", C.company), row("電話", C.phone)];
  if (C.email) info.push(row("E-mail", C.email));
  info.push(row("LINE", C.lineId));
  info.push(row("官網", C.website.replace(/^https?:\/\//, "")));

  // 第 1 張：個人名片
  const card1 = {
    type: "bubble", size: "kilo",
    header: header(C.companyEn + " ・ 餐飲數位顧問"),
    body: {
      type: "box", layout: "vertical", spacing: "md", paddingAll: "18px",
      contents: [
        {
          type: "box", layout: "horizontal", spacing: "md", alignItems: "center",
          contents: [
            {
              type: "box", layout: "vertical", width: "56px", height: "56px", cornerRadius: "28px",
              backgroundColor: c.soft, justifyContent: "center", flex: 0,
              contents: [C.avatarImg
                ? { type: "image", url: C.siteUrl + "/" + C.avatarImg, size: "full", aspectMode: "cover", aspectRatio: "1:1" }
                : { type: "text", text: C.avatarText, align: "center", weight: "bold", color: c.main, size: "lg" }]
            },
            {
              type: "box", layout: "vertical", contents: [
                { type: "text", text: C.name + "  " + C.nameEn, weight: "bold", size: "md", color: c.text, wrap: true },
                { type: "text", text: C.title, size: "xs", color: c.sub, wrap: true }
              ]
            }
          ]
        },
        { type: "text", text: C.slogan, size: "xs", color: c.text, wrap: true },
        { type: "separator", color: "#E5E2DA" },
        { type: "box", layout: "vertical", spacing: "xs", contents: info }
      ]
    },
    footer: {
      type: "box", layout: "vertical", spacing: "xs", paddingAll: "12px",
      contents: [
        primaryBtn("LINE 聊聊需求", lineUrl),
        btn("看電子名片", liffUrl),
        btn("轉傳這組名片", liffUrl + "?share=1")
      ]
    }
  };

  // 第 2 張：服務
  const card2 = {
    type: "bubble", size: "kilo",
    header: header("我們能幫你做什麼"),
    body: {
      type: "box", layout: "vertical", spacing: "sm", paddingAll: "18px",
      contents: [
        { type: "text", text: C.serviceTitle, weight: "bold", size: "md", color: c.text, wrap: true },
        { type: "text", text: C.serviceDesc, size: "xs", color: c.sub, wrap: true },
        { type: "box", layout: "vertical", spacing: "xs", margin: "md",
          contents: C.services.map(s => ({ type: "text", text: "・" + s, size: "xs", color: c.text, wrap: true })) },
        { type: "text", text: "更多需求，LINE 直接聊", size: "xxs", color: c.sub, margin: "md" }
      ]
    },
    footer: {
      type: "box", layout: "vertical", paddingAll: "12px",
      contents: [primaryBtn(C.serviceButton, C.website)]
    }
  };

  // 第 3 張：資源
  const card3 = {
    type: "bubble", size: "kilo",
    header: header("資源分享"),
    body: {
      type: "box", layout: "vertical", spacing: "sm", paddingAll: "18px",
      contents: [
        { type: "text", text: C.resourceTitle, weight: "bold", size: "md", color: c.text, wrap: true },
        { type: "text", text: C.resourceDesc, size: "xs", color: c.sub, wrap: true },
        ...C.resources.map(r => ({
          type: "box", layout: "vertical", backgroundColor: c.soft, cornerRadius: "8px",
          paddingAll: "10px", margin: "sm",
          contents: [
            { type: "text", text: r.title, weight: "bold", size: "xs", color: c.main },
            { type: "text", text: r.desc, size: "xxs", color: c.text, wrap: true, margin: "xs" }
          ]
        }))
      ]
    },
    footer: {
      type: "box", layout: "vertical", paddingAll: "12px",
      contents: [primaryBtn(C.resourceButton, C.website)]
    }
  };

  return {
    type: "flex",
    altText: C.name + "｜" + C.company + " 的電子名片",
    contents: { type: "carousel", contents: [card1, card2, card3] }
  };
};

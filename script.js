const text = {
  en: {
    title: "We’re improving our system",
    message:
     "Our system is currently under maintenance while we improve stability and fix ongoing issues.",
    cta: "Cancel a Class",
    note: "Thank you for your patience and understanding."
  },
  zh: {
    title: "系統維護中",
    message:
      "系統目前正在維護中，我們正在改善系統穩定性並修復相關問題。",
    cta: "取消課程",
    note: "感謝您的理解與耐心等候。"
  }
};

function setLang(lang) {
  document.getElementById("title").innerText = text[lang].title;
  document.getElementById("message").innerText = text[lang].message;
  document.getElementById("cta").innerText = text[lang].cta;
  document.getElementById("note").innerText = text[lang].note;
}

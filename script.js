function search() {
  let search = document.getElementById("search").value;
  let site = document.getElementById("submit");
  switch (search) {
    case "qlive":
      site.href = "https://quizlet.com/live";
      break;
    case "blooket":
      site.href = "https://dashboard.blooket.com/my-sets";
      break;
    case "drive":
      site.href = "https://drive.google.com/drive/u/0/my-drive";
      break;
    case "pschool":
      site.href = "https://p8uuwp.csb.app/";
      break;
    case "gmail":
      site.href = "https://mail.google.com/mail/u/0/#inbox";
      break;
    case "chat":
      site.href = "https://mail.google.com/chat/u/0/#chat/welcome";
      break;
    default:
      site.href =
        "https://www.google.com/search?q=" +
        search +
        "&rlz=1CASFKO_enUS1020&oq=b&aqs=chrome.1.69i60j69i59j69i57j69i59l2j69i60l3.2896j0j7&sourceid=chrome&ie=UTF-8&safe=active&ssui=on";
  }
}

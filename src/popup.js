/**
 * get document elements
 */
const signWithGooleBtn = document.getElementById("signWithGoogleBtn");

/**
 * get google OAuth2 token
 */
signWithGooleBtn.addEventListener("click", () => {
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
    console.log("Obtained token:", token);
    chrome.runtime.sendMessage({ action: "getUserInfo", token: token });
  });
});

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  switch (request.action) {
    case "getUserInfo":
      const userInfo = await getUserInfo(request.token);
      console.log(userInfo);
      break;
    default:
      console.error("unknown request.");
  }
});

const getUserInfo = async (token) => {
  const response = await fetch(
    "https://www.googleapis.com/drive/v3/about?fields=user",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );

  if (response.status === 200) {
    return response.json();
  } else {
    // TODO: exception 처리
    console.error(response);
  }
};

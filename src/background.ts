import MessageSender = chrome.runtime.MessageSender;

interface Message {
    action: string;
    token: string;
}
// @ts-ignore
chrome.runtime.onMessage.addListener(async (message: Message, sender: MessageSender, sendResponse): Promise<boolean> => {
    switch (message.action) {
        case "getUserInfo":
            const userInfo = await getUserInfo(message.token);
            console.log(userInfo);
            break;
        default:
            console.error("unknown request.");
            break;
    }
    return true;
});

const getUserInfo = async (token: string) => {
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

const CHAT_HISTORY = [
  {
    type: "image",
    url: "https://i.ibb.co/cys3cBZ/Image-from-i-OS-10.jpg",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:48:10.000Z"
  },
  {
    type: "text",
    content: "부적은 잘 있습니다.",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:48:13.000Z"
  },
  {
    type: "text",
    content: "진품명품 나가요?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:48:20.000Z"
  },
  {
    type: "text",
    content: "네네 도희님이 사시나요?",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:49:33.000Z"
  },
  {
    type: "text",
    content: "네?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:50:32.000Z"
  },
  {
    type: "text",
    content: "도희 사시 아니예요",
    username: "Soin Na",
    color: "#d1c17b",
    createdAt: "2021-07-10T11:50:28.000Z"
  },
  {
    type: "text",
    content: "저희 할머니네 도자기랑 교환하실래요?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:43.000Z"
  },
  {
    type: "image",
    url: "https://i.ibb.co/KsrBkYw/Image-from-i-OS-11.jpg",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:55.000Z"
  },
  {
    type: "text",
    content: "할머니가 진품명품에 내달라고 부탁했는데",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:57.000Z"
  },
  {
    type: "text",
    content: "오오 진짜 이쁘네요 도자기",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:52:21.000Z"
  },
  {
    type: "text",
    content: "그럼 안녕히계십시오",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:52:22.000Z"
  },
  {
    type: "text",
    content: "원장님은 아이스크림 심부름중,,, 터벅터벅,,",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:58:09.000Z"
  },
  {
    type: "image",
    url: "https://i.ibb.co/Mnz4ysz/i-OS.jpg",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:58:12.000Z"
  },
  {
    type: "text",
    content: "여기서 보셔도 돼요 https://i.ibb.co/Mnz4ysz/i-OS.jpg",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:59:51.000Z"
  },
];

function createTextMessage(data) {
  return `
    <div class="meta">
      <span class="time">${prettifyISOString(data.createdAt)}</span>
      <span
        class="username"
        style="color: ${data.color};"
      >${data.username}</span>
    </div>
    <p class="content">${convertToLink(data.content)}</p>
  `;
}

function createImageMessage(data) {
  return `
    <div class="meta">
      <span class="time">${prettifyISOString(data.createdAt)}</span>
      <span
        class="username"
        style="color: ${data.color};"
      >${data.username}</span>
    </div>
    <image class="content" src="${data.url}">
  `;
}


function convertToLink(content) {
  // 'http://'나 'https://'로 시작되는 문자열의 인덱스값 찾기
  let idx = -1
  if(content.includes('http://')){
      idx = content.indexOf('http://');
      } else if (content.includes('https://')){
      idx = content.indexOf('https://');
      }

  // 찾은 문자열을 a tag 형식으로 바꿔주기
  if (idx!= -1) {
    const findURL = content.substring(idx);
    const aURL = `<a href = '${findURL}'>${findURL}</a>`;
    content = content.replace(findURL, aURL);
    return content;
  } else {
    return content;
    }
}


function prettifyISOString(iso) {
  // ISO String을 "시간:분" 형태로 변환하여 반환
  const time = new Date(iso).toLocaleTimeString('en',
                 { timeStyle: 'short', hour12: false, timeZone: 'UTC'});
  return time;
}

const messageListElement = document.querySelector(".message-list");

for (let i = 0; i < CHAT_HISTORY.length; i++) {
  const chat = CHAT_HISTORY[i];

  const messageElement = document.createElement("li");

  if (chat.type === "text") {
    messageElement.innerHTML = createTextMessage(chat);
  } else if (chat.type === "image") {
    messageElement.innerHTML = createImageMessage(chat);
  }

  messageElement.classList.add("message");
  messageListElement.appendChild(messageElement);
}

// text box(txt)와 send button(btn)에 해당하는 객체를 반환함
const myText = document.getElementById("txt");
const sendBtn = document.getElementById("btn");

// send button을 눌렀을 때, text box에 적힌 내용을 메세지로 보냄
sendBtn.addEventListener("click", function() {
  // 메세지를 보낸 시각 계산
  let offset = new Date().getTimezoneOffset() * 60000;
  let today = new Date(Date.now() - offset);

  // 객체 형태의 메세지 할당
  let myMessage = {
    type: "text",
    content: myText.value,
    username: "이소라",
    color: "#33FFFD",
    createdAt: today.toISOString()
  };
  // 메세지를 HTML에 출력
  document.getElementById("myMsg").innerHTML = createTextMessage(myMessage);
});
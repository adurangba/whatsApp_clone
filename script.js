
const chatContainer = document.querySelector(".chat-container");

const chats =[
    {
        profilePicture :"https://i.ibb.co/WGhBsHz/pexels-tu-n-ki-t-jr-1374510.jpg",
        name:"Atoyebi",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/DzctKpD/pexels-amusan-john-7745573.jpg",
        name:"John",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/th0w218/pexels-anna-nekrashevich-8993561.jpg",
        name:"Mariam",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/z65FWqz/pexels-chloe-1043471.jpg",
        name:"Kloe",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/9sN0L1H/pexels-chrofit-the-man-to-call-5615665.jpg",
        name:"Alena",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/1ncQx0j/pexels-cottonbro-studio-5378700.jpg",
        name:"Singh",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/s608BT0/pexels-ketut-subiyanto-4307869.jpg",
        name:"Josh",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/kqXfcj0/pexels-koolshooters-6976943.jpg",
        name:"Bella",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/fd3RCVJ/pexels-monstera-5384445.jpg",
        name:"Matt",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/gyvMHPZ/pexels-soulphotobr-1772475.jpg",
        name:"Nat",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/fdRCjhp/pexels-rachel-claire-5490276.jpg",
        name:"Rachel Claire",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/HtRycwL/pexels-ron-lach-8129903.jpg",
        name:"Ron Lach",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/xDkVjGY/91830-vresize-350-350-medium-20.png",
        name:"Esther",
        message:"Hey How are you",
    },
    {
        profilePicture :"https://i.ibb.co/KW9jMpv/pexels-olena-bohovyk-3646160.jpg",
        name:"Olena Bohovyk",
        message:"Hey How are you",
    },
]

chats.forEach(chatData => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");

    const divContent = `
    <div class ="chat-grid">
    <div class= "profilePicture"><img src="${chatData.profilePicture}" alt="Profile Picture"></div>
    <div class = "name">${chatData.name}</div>
    <div class = "message">${chatData.message}</div>
    </div>
  `;

    chatDiv.innerHTML = divContent;
    chatContainer.appendChild(chatDiv);
});
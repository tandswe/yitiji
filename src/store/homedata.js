// const navdata  = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//         id:1,
//         content:`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABkCAYAAAB0F0VpAAAHlElEQVR4Xu1dZ8hdRRA9xw6iKBZsYPlh7wUVbAh2UBALFlAwiSaxRRJLUGNDxd67YscfYhBLxIK9oVFBDYiiYgcVFUVFxZGja3zvevP2lr3v25dv9mfe7tzZc3ZmZ2Y3+xHeskSAWWrlSsGJyXQRODFOTKYIZKqWW4wTkykCmarlFuPEZIpApmq5xTgxmSKQqVpuMU5MpghkqtZCYTFmth+AywCsE3D+DsCpJG/KFPeoWiNNjJktBeBiAMcuYKb36TeS30aRyKzDyBJjZjsAkEVsEMH0CwCTSD6SGfYD1RlJYszsXACn1wT6cgDTSf5Zc9yYdB8pYsxsYwA3A9iuIVpvAZhAcm7D8UMbNjLEmNm0sMGnAGcGyUtSCOpKRvbEmNmaAG4AsGcEhN8AHAXgewB3Alg+0v+xsPd82hW4beRmTYyZHQngGgBLRyb5IoCjSb6rfma2eggM9o6M+xHAZJL3tAGxi7FZEmNmWu3XAjikwqTPInl2WT8zOwnApRVk3BbC6l8q9B1Kl+yICcnidQBWiyAg61AY/NKgfma2OYBbAGwVkfdhkPfUUJCPfCQbYsxsMQBXAJhaAZirAJxI0nr7mtmKAPYlKQvoa2Z2EYAZFWSfR/KMCv067ZIFMWa2S9jg14vMVhu19pI5JcDvE2SsAeA1BQIk3y4Qt1sItxVQDGqvhLD67z1rLNqYE2Nm5wCoskLvAnAcyR8KYC8RyjLHFwD8HcA0ktqr5jczWzbsX4dHAFeUJ6u8flwRY2abhRUeSxZFhOpdd5dYya4hahtUlnkIwDEkVZrpJeiIQFAs4nsgjP96mASNicWEZFHFx0UjkxWoU0n25RpmtgiA8wGcUhGsb4K1qajZS85aAG4EsHtEzlcAppCcXfF7rbsNlRgzExCKuPaKaK561kkkryyxkm0ByL1s0WD2twaC+sJiMzstEB0TeXVwb53X24ZGjJnJdSiako8f1J4Pq/OdElLOBFCas8QQ7fn9/SD/yYL1bBOSUoXXg5r0UgAyMEyvoU9p186JMbMVAGjlH1ZB2XNIziohZNOwH21fQUbVLheQnFkgR65VB27FQKJM5kySF1T9WN1+nRJjZvsG16USyaCmsFQb9AslpCj3UA7SRVNYrJKMqs7zm5kp9NZZTyzJldXJepScJm2dEGNmS4aVN6WCtvLb2k/+KICzfrCSnSvIaNtF39d5TS85SlZVpzs4IvynsG/d3laJ3vHJialxsvhZ8PWKvPqamcmVyEpE8LDaw0GfYgQ4MeyNOsYe1JRnKYJUYbR1S0pMjZNF5SRKFlWi712la4eIa4/WM2smoDRnMjNVJBRWx6z34+DaHm/2+f9GJSHGzDYJPjmWLIqIE0jqvKRoJZMA6PBqmbaTSjD+jrBw+la/malCoUpFrF1EsmqOVSqrNTEhWVRpPSbr0bDRflKwklWDqzggNtsh//5RWP1PFPTdMVhP7BLIqwAmFut1VecQA3OgnIquS5u6jnJVOS5aiUJo/bs22lzbpSSnF8hZPKQAkyNKKxHdk2QfuVUm2paYvrJ7yQcVjurMpFjlFRGKgmKFxCpzGEYfXd7Q6n+zQNBBABRVrjxAiR9JxpLq/w3vkphzSSpTL1rJ/iEMlQsbtXYySdX45jczWyW4NuVspY1kbZxrDygo9UZJzWpesBKdw/dOQJu6suoJo8ZGQV+5JSWV2oN656cDPnkBubne9gPJ5erOuS0xuiusiq3qTGoqvWg/0VlIr9K64aKbLrEDqrr6j1X/n0Mg0xddlkSnikL3J/l0XUVbEfPvx8xsQwC/FksTZqbVIytZ0N3iuvrm1v/ekJQWD+90yV01wjkkv2yidBJiyj5c47i4id45jfk8uLakd6M7IcbMlFxdmBN6Q9BlFskqyWclVboi5j0A61bSYOHp9AnJZHtoV8Q8U6GutPBQ8s9MXiGZ7LzIiUm3PJyYdFgmleTEJIUznTAnJh2WSSU5MUnhTCfMiUmHZVJJTkxSONMJc2LSYZlUkhOTFM50wpyYdFgmleTEJIUznTAnJh2WSSU5MUnhTCfMiUmHZVJJ454YvUWmy4NNmh5kiL2Y0USuxox7Yl4lGbuKWwqumb3c4oGgGGHjnpi5JLeOoVT2u5npv5k3Glvhe+OemDdIxl65WJDFvF7hhYwKHJR2cWKcmIZrx8y6PPN3i2nIi56lcmKaghfGjeJlDLeYpqS7xTRF7r9xbjHtMfxXgkdlHpU1XE3uyhoC1zPMXVl7DN2VBQQ8Kmu6mNyVNUXOo7L2yP1fgkdlHpU1XFfuyhoC51FZe+BKJLgrc1fWcGG5K2sInLuy9sCNqit7FsBOnUwfeItkk6d9dU6kx3q27EivxpdEyvTpqiSjV5f0PnIXbR7JjZoINjM9iqpXPLpojRfMMInRH8o5tIvZA5hNUi841W5m9qD+WkbtgdUG3E/ywGpd4726shg9/vMcgNizvnEN+3voXZadSepR69otvG2pB7dXqj148AA9W7ILyQ9Sye2EmFTKjWc5Tkym7DsxTkymCGSqlluME5MpApmq5RbjxGSKQKZqucU4MZkikKlabjFOTKYIZKqWW0ymxPwFTIgEkrmSUjkAAAAASUVORK5CYII=">
//         <span >首页</span>
//         <style>
//         img{
//         width:2.6vw;
//         height:4.6vh;
//         }
//         </style>
//         `,
//         comp:0
//         },
//         {
//         id:2,
//         content:"热点事项",
//         comp:1,
//         },
//         {
//         id:3,
//         content:"按部门分类",
//         comp:2
//         },
//         {
//         id:4,
//         content:"按主题分类",
//         comp:1,
//         },
//         {
//         id:5,
//         content:"按主题分类",
//         comp:1,
//         }
//         ]);
//     }, 100);
//   });

//   export { navdata};

export default{
  navdata:[
    {
    id:1,
    content:`<img src="data:image/png;base64,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">
    <span >首页</span>
    <style>
    img{
    width:2.6vw;
    
    }
    </style>
    `,
    comp:0
    },
    {
    id:2,
    content:"热点事项",
    comp:1,
    },
    {
    id:3,
    content:"按部门分类",
    comp:2
    },
    {
    id:4,
    content:"按主题分类",
    comp:1,
    },
    {
    id:5,
    content:"按特定对象分类",
    comp:1,
    }
    ],

    //1
    //常用列表模拟数据
   licontent1:[
  {name:"违章处理",img:require("@/img/list/a1.png"),url:"/jiaotongfa/jiaotong/c1"},
  {name:"无犯罪记录证明",img:require("@/img/list/a15.png"),url:"/crimeTestify/crimeTStep0"},
  {name:"港澳台旅行签证",img:require("@/img/list/a3.png"),url:"/entyDndexitPage/entryindividual"},
  {name:"居住证补办",img:require("@/img/list/a4.png"),url:"/residenceReplace"},
  {name:"残疾人补贴",img:require("@/img/list/a5.png"),url:""},
  {name:"高领老人津贴",img:require("@/img/list/a6.png"),url:"/advancedEntrance"},
  {name:"特困家庭核查",img:require("@/img/list/a7.png"),url:""},
  {name:"低保核查",img:require("@/img/list/a8.png"),url:"/safeguardEntrance"},
  {name:"领取资格认证",img:require("@/img/list/a9.png"),url:"/ssprinting/basicOldAge"},
  {name:"社保清单打印",img:require("@/img/list/a10.png"),url:"/ssprinting/psetp"},
  {name:"参保证明打印",img:require("@/img/list/a11.png"),url:"/ssprinting/Proofof"},
  {name:"社保卡余额查询",img:require("@/img/list/a12.png"),url:"/ssprinting/balance"}
],
//2
licontent2:[
  {name:"出境入境",img:require("@/img/list/a13.png"),url:"/moveSelect/0?num=1",background:"#4BB8F3"},
  {name:"冶安管理",img:require("@/img/list/zhian05.png"),url:"moveSelect/0?num=3",background:"#F9CA3B"},
  {name:"社会保障 <br>（社会保险，社会救助）",img:require("@/img/list/a15.png"),url:"/moveSelect/1",background:"#EF787A"},
  {name:"公安行政",img:require("@/img/list/gongan05.png"),url:"/moveSelect/0?num=0",background:"#FFA92E"},
  {name:"医疗卫生",img:require("@/img/list/a17.png"),url:"",background:"#33CCF2"},
  {name:"住房保障",img:require("@/img/list/a18.png"),url:"/moveSelect/5",background:"#4BB8F3"},
  {name:"司法公正",img:require("@/img/list/a19.png"),url:"/moveSelect/4",background:"#4BB8F3"},
  {name:"生育收养",img:require("@/img/list/a20.png"),url:"",background:"#33CCF2"},
  {name:"优待抚恤",img:require("@/img/list/a21.png"),url:"",background:"#FFA92E"},
  {name:"教育科研",img:require("@/img/list/a22.png"),url:"",background:"#41CAA9"},
  {name:"交通出行",img:require("@/img/list/a23.png"),url:"/moveSelect/0?num=2",background:"#4BB8F3"},
  {name:"公用事业",img:require("@/img/list/a24.png"),url:"",background:"#4BB8F3"}
],
licontent3:[
  {name:"高校毕业生",img:require("@/img/list/a25.png"),url:"",background:"#41CAA9"},
  {name:"人才",img:require("@/img/list/a26.png"),url:"",background:"#4BB8F3"},
  {name:"老年人",img:require("@/img/list/a27.png"),url:"/advancedEntrance/advanceLogin",background:"#FFA92E"},
  {name:"残疾人",img:require("@/img/list/a28.png"),url:"/moveSelect/6",background:"#4BB8F3"},
  {name:"特困家庭",img:require("@/img/list/a29.png"),url:"",background:"#FFA92E"},
  {name:"儿童青少年",img:require("@/img/list/a30.png"),url:"",background:"#F9CA3B"},
  {name:"妇女",img:require("@/img/list/a31.png"),url:"",background:"#EF787A"},
  {name:"农民",img:require("@/img/list/a32.png"),url:"",background:"#33CDF3"},
  {name:"外国人",img:require("@/img/list/a33.png"),url:"",background:"#33CDF3"},
  {name:"港澳台侨",img:require("@/img/list/a34.png"),url:"/residenceAudit",background:"#4BB8F3"}
]
}
Vue.use(VueLazyload,{
  loading:'img/default.gif'
})


var app = new Vue({
  el: '#app',
  data: {
    show:true,
    id:'0',
    tab:['front_end'],
    works:[{
      hide:true,
      id:'',
      category:[],
      cover:'',
      cover_title:'',
      title: '',
      date:'',
      type:'',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        ['','']
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://imgur.com/cjxFVTV.png',
      cover_title:'前進十四峰',
      title: '前進十四峰<br>橘子關懷基金會',
      date:'2021.08',
      type:'Front-end',
      tag:['Vue.js','Wordpress','GSAP','Swiper'],
      url_name:'前進十四峰｜橘子關懷基金會',
      url: 'https://gonext14peaks.gamaniacheerup.org/',
      descript:'設計總監：Lee Ming<br>專案經理：Tani Tsai<br>網站設計：Tani Tsai<br>網站設計協助：Zhung Wu<br>工程開發：<b>Les Lai</b><br>工程開發協助：Evan Yang<br><br>此專案除3D線段動畫、按讚動畫、頁面路由設定由Evan Yang協助外，其餘全站頁面切版、動畫製作、Wordpress ACF開設/串接皆為本人負責製作',
      img:[
        {src:'https://imgur.com/cjxFVTV.png'},
        {src:'https://imgur.com/jiDpf5F.png'},
        {src:'https://imgur.com/aMfb580.png'},
        {src:'https://i.imgur.com/q5OJqJS.png',descript:''},
        {src:'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/e343bb0c-301c-4f74-a902-54a6221b6a13.gif?ClientID=vimeo-core-prod&Date=1646903925&Signature=9ab7ef620a998c9e33cf11125fb654aac9641f9e',descript:''},
        {src:'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/30d1d55c-09ff-4024-8271-7793d986617a.gif?ClientID=vimeo-core-prod&Date=1647073619&Signature=ded38608614637c43062773c5b6558952fb93133',descript:''},
        // {video:'https://player.vimeo.com/video/686616450?h=9709ee63c1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',descript:''},
        {src:'https://i.imgur.com/jgmmzez.png',descript:''},
        {src:'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/79c27eb9-8454-4d0e-a051-036e0ed74d2c.gif?ClientID=vimeo-core-prod&Date=1647073977&Signature=cda7083c64801a816c56dbc23f9ee77d9d0dd72c',descript:''},
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/3eob9X7.png',
      cover_title:'百聿數碼 Bossdom',
      title: '百聿數碼 Bossdom',
      date:'2021.12',
      type:'Front-end',
      tag:['Vue.js','Wordpress','Paper.js','GSAP'],
      url_name:'百聿數碼Bossdom',
      url: 'https://www.bossdom.com/',
      descript:'設計總監：Lee Ming<br>專案經理：Haily Kao<br>網站設計：Molly Hung<br>網站設計協助：Ting Tsai<br>工程開發：<b>Les Lai</b><br>工程開發協助：Evan Yang / Ting Wei<br><br>全站頁面切版、動畫製作、Wordpress ACF開設/串接皆為本人負責製作，Evan Yang、Ting Wei提供部分技術問題的顧問協助',
      img:[
        {src:'https://i.imgur.com/UCUmuBI.png',descript:''},
        {src:'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f7f4e275-fd73-4ec8-ae30-90467caada4f.gif?ClientID=vimeo-core-prod&Date=1646991461&Signature=d8a6480e2241baf6d0f8e47b3cf5e933b12022bd',descript:''},
        {src:'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ae698c0b-4461-4cab-876e-df8ea06d54c6.gif?ClientID=vimeo-core-prod&Date=1646991875&Signature=c17033bf8aff52f0e5edbb927ad20afb3a16c113',descript:''},
        {src:'https://i.imgur.com/zmZB5bo.png',descript:''},
        {src:'https://i.imgur.com/ZOiyJNE.png',descript:''},
        {src:'https://i.imgur.com/FqSgMXp.png',descript:''},
        {src:'https://i.imgur.com/ElfRTB9.png',descript:''},
        {src:'https://i.imgur.com/9Ld1jNl.png',descript:''},
        {src:'https://i.imgur.com/Iv4G8UG.png',descript:''},
      ]
    },{
      hide:false,
      id:'',
      category:['front_end','design'],
      cover:'https://imgur.com/eaFk15E.png',
      cover_title:'Una Photography',
      title: 'Una Photography',
      date:'2021.04',
      type:'Web design / Front-end',
      tag:['Nuxt 3','Wordpress','ScrollTrigger','GSAP','Locomotive','Pinia'],
      url_name:'Una Photography',
      url: 'https://unaliu.love',
      descript:'此專案為本人自行接案，已完成設計，尚在開發階段',
      img:[
        {src:'https://imgur.com/KseMwuo.png',descript:''},
        {src:'https://imgur.com/eaFk15E.png',descript:''},
        {src:'https://imgur.com/MGaUDz6.png',descript:''},
        {src:'https://imgur.com/jA3jSHP.png',descript:''},
        {src:'https://imgur.com/jwOc0E1.png',descript:''},
        {src:'https://imgur.com/L0QRqWx.png',descript:''},
        {src:'https://imgur.com/k2KxIEz.png',descript:''},
        {src:'https://imgur.com/scFMGBC.png',descript:''},
        {src:'https://imgur.com/I0uKePH.png',descript:''},
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://imgur.com/eq5HGZd.png',
      cover_title:'新舞台藝術節',
      title: '新舞台藝術節',
      date:'2022.09',
      type:'Front-end',
      tag:['Nuxt 3','GSAP','Three.js'],
      url_name:'新舞台藝術節',
      url: 'http://client.e-s.tw/',
      descript:'此專案為本人第一次使用Three.js，非常有趣的經驗',
      img:[
        {src:'https://imgur.com/eq5HGZd.png',descript:''},
        {src:'https://imgur.com/OAgVigf.gif',descript:''},
        {src:'https://imgur.com/LRoDl57.png',descript:''},
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/oWQJWVo.png',
      cover_title:'毛森江建築工作室',
      title: '毛森江建築工作室',
      date:'2021.09',
      type:'Front-end',
      tag:['Vue.js','Wordpress','GSAP'],
      url_name:'毛森江建築工作室',
      url: 'http://www.maoshenchiang.com/',
      descript:'設計總監：Lee Ming<br>專案經理：Haily Kao<br>網站設計：Zoe Lin<br>工程開發：<b>Les Lai</b>​<br><br>全站頁面切版、動畫製作、Wordpress ACF開設/串接皆為本人負責製作',
      img:[
        {src:'https://i.imgur.com/kQFakFB.png',descript:''},
        {src:'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/df13d244-8e55-4be0-9b0f-a982a4da8158.gif?ClientID=vimeo-core-prod&Date=1647159067&Signature=1558656d4fc547c8351d21db1d73fb31cf10732c',descript:''},
        {src:'https://i.imgur.com/bEYcLoX.png',descript:''},
        {src:'https://i.imgur.com/vqLqQUM.png',descript:''},
        {src:'https://i.imgur.com/CEpk8pt.png',descript:''},
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/m1AHE05.jpg',
      cover_title:'台北流行音樂中心',
      title: '台北流行音樂中心<br>大事記頁面',
      date:'2021.07',
      type:'Front-end',
      tag:['Vue.js','Wordpress','GSAP'],
      url_name:'台北流行音樂中心',
      url: 'https://tmc.taipei/about/history/',
      descript:'設計總監：Lee Ming<br>創意發想：Wuzhung Wu / Zoe Lin / Lee Ming / Luju Lu​<br>專案經理：Tani Tsai<br>網站設計：Wuzhung Wu / Zoe Lin<br>工程開發：Ting Wei Chuang​<br>工程開發協助：<b>Les Lai</b>​<br><br>此專案本人協助製作部分元件與大事記頁面切版',
      img:[
        {src:'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/eda74420-ecbc-47b9-9fa3-e4a0e2a439b2.gif?ClientID=vimeo-core-prod&Date=1647074615&Signature=51b51bb5b0651f704c6b1d6e080a50366408a33e',descript:''},
        {src:'https://i.imgur.com/Covs3Tv.jpg',descript:''},
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://imgur.com/uig5kDO.png',
      cover_title:'AJ2',
      title: 'AJ2',
      date:'2022.08',
      type:'Front-end',
      tag:['Vite','GSAP','ScrollTrigger','Locomotive'],
      url_name:'Ultra Tech高效能貓抓布 沙發系列',
      url: 'http://aj2.e-s.tw/',
      descript:'除了SVG動畫與Swiper部分外，其餘皆為本人製作',
      img:[
        {src:'https://imgur.com/uig5kDO.png',descript:''},
        {src:'https://imgur.com/lVsihi6.gif',descript:''},
        {src:'https://imgur.com/Fd8PYlF.gif',descript:''},
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://imgur.com/V0Ul4yv.png',
      cover_title:'Bolon',
      title: 'Bolon',
      date:'2022.06',
      type:'Front-end',
      tag:['Nuxt 3','Wordpress','GSAP','ScrollTrigger','Locomotive','Pinia'],
      url_name:'Ultra Tech高效能貓抓布 沙發系列',
      url: 'https://dd-a.tw/',
      descript:'與Eason Chiu共同製作，為第一次使用Nuxt 3，也是為公司開發模板的基底',
      img:[
        {src:'https://imgur.com/V0Ul4yv.png',descript:''},
        {src:'https://imgur.com/RtnGQfH.png',descript:'post-type 篩選、收尋功能'},
        {src:'https://imgur.com/fIN6Nnm.png',descript:'簡易購物車、寄信功能'},
      ]
    },{
      hide:true,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/ihB2a9x.png',
      cover_title:'新北市政府觀光局<br>提案Demo',
      title: '新北市政府觀光局<br>提案Demo',
      date:'2020.07',
      type:'Front-end',
      tag:['ScrollTrigger','ahrelax'],
      url_name:'提案Demo',
      url: 'http://blog.jk2u.com/work_site/ntpc/demo_web/test.html',
      descript:'視覺與動態風格仿作 <a href="https://www.town.shimane-misato.lg.jp/misatoto/" target="_blank">日本島根縣網站</a>',
      img:[
        {src:'http://i.imgur.com/go4lksX.gif',descript:''},
        {src:'https://i.imgur.com/ubffsrG.png',descript:''},
        {src:'https://i.imgur.com/ihB2a9x.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end','design'],
      cover:'https://imgur.com/0TTpgFE.png',
      cover_title:'Natural n Vintage',
      title: 'Natural n Vintage',
      date:'2018.06',
      type:'Web design / Front-end',
      tag:[],
      url_name:'Natural n Vintage',
      url: 'https://naturalnvintage.com',
      descript:`在Natural n Vintage籌備初期，阿吉（老闆）問我有沒有辦法架網站，
      我：「可以，但是我不會寫程式」，
      阿吉：「沒關係，你慢慢研究」，
      於是我們就這樣開始了。`,
      img:[
        {src:'https://imgur.com/90a3s1n.png',descript:''},
        {src:'https://imgur.com/C80aZOZ.png',descript:''},
        {src:'https://imgur.com/0N5OlTS.png',descript:''},
        {src:'https://imgur.com/cyrmfoH.png',descript:''},
        {src:'https://imgur.com/M3WHaTx.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['front_end','design'],
      cover:'https://i.imgur.com/N863v7v.png',
      cover_title:'Sony α',
      title: 'Sony α',
      date:'2020.12',
      type:'Web design / Front-end',
      tag:['Vue.js'],
      url_name:'Sony α',
      url: 'https://store.sony.com.tw/alpha/',
      descript:'',
      img:[
        {src:'https://i.imgur.com/N863v7v.png',descript:''},
        {src:'https://i.imgur.com/OrIgd9J.png',descript:''},
        {src:'https://i.imgur.com/0GGLTnU.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/GuC2C44.png',
      cover_title:'AQUOS<br>sense4 Plus',
      title: 'AQUOS<br>sense4 Plus',
      date:'2020.11',
      type:'Web design / Front-end',
      tag:['GSAP','ScrollTrigger','ahrelax'],
      url_name:'AQUOS sense4 Plus',
      url: 'https://aquosmobile.sharp.com.tw/WebSubSite/aquos/sense4.html',
      descript:'',
      img:[
        {src:'https://i.imgur.com/GuC2C44.png',descript:''},
        {src:'https://i.imgur.com/QHrL1FQ.png',descript:''},
        {src:'https://i.imgur.com/ECnyiri.png',descript:''},
        {src:'https://i.imgur.com/ZxAHnv2.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/vI2vSS6.jpg',
      cover_title:'AQUOS<br>sense5G',
      title: 'AQUOS<br>sense5G',
      date:'2021.03',
      type:'Web design / Front-end',
      tag:['GSAP','Locomotive-Scroll','ScrollTrigger'],
      url_name:'AQUOS sense5G',
      url: 'https://aquosmobile.sharp.com.tw/WebSubSite/aquos/sense5G.html',
      descript:'',
      img:[
        {src:'https://i.imgur.com/KyxVYtQ.gif',descript:''},
        {src:'https://i.imgur.com/vI2vSS6.jpg',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/zaDX4Za.jpg',
      cover_title:'松菸360°導覽提案Demo',
      title: '松菸360°導覽提案Demo',
      date:'2021.03',
      type:'Front-end',
      tag:['Panolens'],
      url_name:'360°導覽',
      url: 'http://blog.jk2u.com/work_site/jk2u_test/leo/360tour/',
      descript:'此為提案階段之Demo頁面',
      img:[
        {src:'https://i.imgur.com/zaDX4Za.jpg',descript:''},
        {src:'https://i.imgur.com/j4jHI9k.jpg',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/4GUOi98.png',
      cover_title:'Fayd 飛宜得',
      title: 'Fayd 飛宜得',
      date:'2021.02',
      type:'Front-end',
      tag:['Vue.js','GSAP','ScrollTrigger','Locomotive-Scroll'],
      url_name:'飛宜得',
      url: 'https://www.fayd.com.tw/',
      descript:'此專案本人負責之部分為網頁滾動特效製作與店家搜尋功能建置',
      img:[
        {src:'https://i.imgur.com/4GUOi98.png',descript:''},
        {src:'https://i.imgur.com/OMOmKyX.gif',descript:''},
        {src:'https://i.imgur.com/2fzI6WD.gif',descript:''},
        {src:'https://i.imgur.com/aROnlA5.gif',descript:''},
        {src:'https://i.imgur.com/KuagRKd.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/c2nPBUb.png',
      cover_title:'2021得利空間<br>色彩趨勢',
      title: '2021得利空間色彩趨勢',
      date:'2020.09',
      type:'Web design',
      tag:[],
      url_name:'2021得利空間色彩趨勢',
      url: 'https://www.letscolor.com.tw/colour_futures/',
      descript:'',
      img:[
        {src:'https://i.imgur.com/9HPikFA.jpg',descript:'提案階段'},
        {src:'https://i.imgur.com/Q9KnkuH.jpg',descript:''},
        {src:'https://i.imgur.com/aQe3ipL.jpg',descript:'完稿'},
        {src:'https://i.imgur.com/xF3SR8O.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/svcMMsU.jpg',
      cover_title:'2021得利空間<br>色彩趨勢AR',
      title: '2021得利空間色彩趨勢AR',
      date:'2020.09',
      type:'Front-end',
      tag:[],
      url_name:'得利空間色彩趨勢AR',
      url: 'https://reurl.cc/Xka90M',
      descript:'',
      img:[
        {src:'https://i.imgur.com/m5t3Pwr.jpg',descript:''},
        {src:'https://i.imgur.com/4XoT1Wp.jpg',descript:''},
        {src:'https://i.imgur.com/jh7wh1a.jpg',descript:''},
        {src:'https://i.imgur.com/MVqoMKz.jpg',descript:''},
        {src:'https://i.imgur.com/svcMMsU.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/n059WQq.png',
      cover_title:'【練習】數獨',
      title: '【練習】數獨',
      date:'2020.05',
      type:'Front-end',
      tag:['Vue.js'],
      url_name:'sudoku',
      url: 'http://blog.jk2u.com/work_site/jk2u_test/leo/sudoku.html',
      descript:'此次練習主要是想測試使用鍵盤作為操控介面。<br>主要功能有：筆記、清除、返回、重做、自動填入筆記數字、產生題目<br>產生題目功能試了三種方法，產生之題目有時解題到最後仍會有一開始無法察覺之矛盾<br><br>此次練習大幅增進了對javascript與陣列處理的熟悉度',
      img:[
        {src:'https://i.imgur.com/YXAlxNu.png',descript:'自動填入每格可能之數字'},
        {src:'https://i.imgur.com/uq3qn1c.png',descript:'自動檢查錯誤'}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/yMsdwwZ.jpg',
      cover_title:'元大期貨 iTrader<br>網頁視覺提案',
      title: '元大期貨 iTrader<br>網頁視覺提案',
      date:'2020.11',
      type:'Web design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://i.imgur.com/IF1YdNr.jpg',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/jcquZ7j.jpg',
      cover_title:'松菸官網改版提案',
      title: '松菸官網改版提案',
      date:'2021.03',
      type:'Web design',
      tag:[],
      url_name:'',
      url: '',
      descript:'本人負責此專案其中一頁面，除頁首、頁尾外皆為本人之設計',
      img:[
        {src:'https://i.imgur.com/nSlMxzj.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/OyyoBYO.jpg',
      cover_title:'橘寶寵物美容<br>名片設計',
      title: '橘寶寵物美容<br>名片設計',
      date:'2020.11',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://i.imgur.com/OyyoBYO.jpg',descript:''},
        {src:'https://i.imgur.com/JSRIfb5.jpg',descript:''},
        {src:'https://i.imgur.com/IQBmmLw.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/8T7B1Bz.jpg',
      cover_title:'Jack & Nana<br>名片設計',
      title: 'Jack & Nana<br>名片設計',
      date:'2020.06',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'logo為原店家使用之logo',
      img:[
        {src:'https://i.imgur.com/8T7B1Bz.jpg',descript:''},
        {src:'https://i.imgur.com/X7xMQR2.jpg',descript:''},
        {src:'https://i.imgur.com/FKw5VHD.jpg',descript:''},
        {src:'https://i.imgur.com/A4CF5x9.jpg',descript:''},
        {src:'https://i.imgur.com/N8QOwOa.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/a4nGTRs.jpg',
      cover_title:'小雀幸 blissure',
      title: '小雀幸<br>blissure',
      date:'2020.05',
      type:'logotype',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://i.imgur.com/a4nGTRs.jpg',descript:''},
        {src:'https://i.imgur.com/4XXJ9Pk.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://imgur.com/1VbHJcf.png',
      cover_title:'Side Chair海報',
      title: 'Side Chair海報',
      date:'2018.12',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/uA76D2P.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://imgur.com/HNg3XsA.png',
      cover_title:'New Antiques Online',
      title: 'New<br>Antiques<br>Online!',
      date:'2018.08',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/PMkTKHb.png',descript:''},
        {src:'https://imgur.com/0n12ICb.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://imgur.com/u9vjgiU.png',
      cover_title:'國立聯合大學<br>45週年校慶',
      title: '國立聯合大學<br>45週年校慶',
      date:'2017.11',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/ZyBVYGJ.png',descript:''},
        {src:'https://imgur.com/PaJ3goJ.png',descript:''},
        {src:'https://imgur.com/Yn24LlM.png',descript:''},
        {src:'https://imgur.com/CGja3Bo.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://imgur.com/KLUcuNF.png',
      cover_title:'國立聯合大學<br>44週年校慶',
      title: '國立聯合大學<br>44週年校慶',
      date:'2016.11',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/JQE9f3y.png',descript:''},
        {src:'https://imgur.com/BnnWUFY.png',descript:''},
        {src:'https://imgur.com/LFm7obU.png',descript:''},
        {src:'https://imgur.com/1pJJPg4.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://imgur.com/OX8Dp0p.png',
      cover_title:'NUR / SCHO KO',
      title: 'NUR<br>/<br>SCHO<br>KO',
      date:'2016.04',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/ZwzlGIe.png',descript:''},
        {src:'https://imgur.com/eglCjU0.png',descript:''},
        {src:'https://imgur.com/4ZZ00Mp.png',descript:''},
        {src:'https://imgur.com/yqxLjGh.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://imgur.com/5yrQibe.png',
      cover_title:'初夜',
      title: '初夜',
      date:'2016,09',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/PzyVivr.png',descript:''},
        {src:'https://imgur.com/O9JwdPp.png',descript:''},
        {src:'https://imgur.com/uwHZB2u.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://imgur.com/RqYiOWH.png',
      cover_title:'NUU Club貼紙',
      title: 'NUU Club貼紙',
      date:'2016.10',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/RqYiOWH.png',descript:''},
        {src:'https://imgur.com/NO668BD.png',descript:''},
        {src:'https://imgur.com/W0H5qYk.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://imgur.com/T8bbudk.png',
      cover_title:'聯大吉祥物提案',
      title: '聯大吉祥物提案',
      date:'2017.06',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/T8bbudk.png',descript:''},
        {src:'https://imgur.com/Dl5Wx77.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://imgur.com/yxZIS4o.png',
      cover_title:'聯大華文系歡迎頁',
      title: '聯大華文系歡迎頁',
      date:'2019.06',
      type:'Web design / Front-end',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/vZyEXFC.png',descript:''},
        {src:'https://imgur.com/HpQXdgm.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://imgur.com/eH0OrM0.png',
      cover_title:'facebook行銷組圖',
      title: 'facebook行銷組圖',
      date:'2018.11',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/M9oUCYq.png',descript:''},
        {src:'https://imgur.com/1tYvoAC.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://imgur.com/av4oGMq.png',
      cover_title:'估價單設計',
      title: '估價單設計',
      date:'2018.11',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://imgur.com/av4oGMq.png',descript:''},
        {src:'https://imgur.com/gPTv1gd.png',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/w9Imc03.jpg',
      cover_title:'台啤特釀研究室<br>平面視覺提案',
      title: '台啤特釀研究室<br>平面視覺提案',
      date:'2021.01',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://i.imgur.com/w9Imc03.jpg',descript:''},
        {src:'https://i.imgur.com/jjgYYxz.jpg',descript:''},
        {src:'https://i.imgur.com/KWf01Ur.jpg',descript:''},
        {src:'https://i.imgur.com/AEHD1A8.jpg',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/MQSDhBi.jpg',
      cover_title:'高雄華航春節Banner',
      title: '高雄華航春節Banner',
      date:'2021.01',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://i.imgur.com/MQSDhBi.jpg',descript:''},
        {src:'https://i.imgur.com/P2HKTnt.jpg',descript:''},
        {src:'https://i.imgur.com/vyuX7QE.jpg',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/FaMCdqI.jpg',
      cover_title:'2020華航雄U號LP提案',
      title: '2020華航雄U號LP提案',
      date:'2020.02',
      type:'Web design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://i.imgur.com/FaMCdqI.jpg',descript:''},
        {src:'https://i.imgur.com/h0QLcve.jpg',descript:''}
      ]
    },{
      hide:true,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/SgZecV1.jpg',
      cover_title:'Sharp AQUOS X e-Sports',
      title: 'Sharp AQUOS X e-Sports',
      date:'2020.07',
      type:'Web design',
      tag:[],
      url_name:'AQUOS X e-Sports ',
      url: 'https://aquosmobile.sharp.com.tw/WebSubSite/aquos/ahq.html',
      descript:'',
      img:[
        {src:'https://i.imgur.com/SgZecV1.jpg',descript:''},
        {src:'https://i.imgur.com/1lpthg3.jpg',descript:''}
      ]
    }]
  },
  methods: {
    works_click: function(event){
      $('.rightbox.Works').siblings().removeClass('view');
      $('.rightbox.Works.mobile').toggleClass('view',true);
      if (this.id != event) {
        this.show=false;
        this.id=event;
      };
    },
    afterEnter: function(){
      waterfall('.waterfall span');
    }
  },
  computed:{
    filtered: function() {
      var tab = this.tab;
      var works = this.works;
      return works.filter((works) => {
        return works.category.indexOf(tab[0]) >= 0;
      })
    }
  },
  created: function(){
    for (var i = 0; i < this.works.length; i++) {
      this.works[i].id=i
    }
  },
  // watch:{
  //   id: function() {
  //     this.$nextTick(
  //       function() {
  //         const iframe = document.querySelector('iframe')
  //
  //         console.log(iframe.contentDocument.body)
  //       }
  //     )
  //   }
  // },
  updated: function () {
    this.$nextTick(function () {
      this.$Lazyload.$on('loaded', function (listener) {
        waterfall('.waterfall span');
      })
      var v = this;
      setTimeout(function(){
        v.show=true;
        waterfall('.waterfall span');
      },350)
    })
  }
})

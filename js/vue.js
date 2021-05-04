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
      category:['front_end','design'],
      cover:'https://i.imgur.com/he01UyH.jpg',
      cover_title:'Una Photography',
      title: 'Una Photography',
      date:'04.2021',
      type:'web design / front-end',
      tag:['Vue.js','ScrollTrigger','Locomotive-Scroll'],
      url_name:'Una Photography',
      url: 'http://blog.jk2u.com/work_site/jk2u_test/leo/una/index2.html',
      descript:'此專案為本人自行接案，尚在開發階段，尚未支援手機瀏覽。<br>後續預計使用Google App Scripts作為簡易DB',
      img:[
        {src:'http://i.imgur.com/XgHq2qL.gif',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end','design'],
      cover:'https://i.imgur.com/N863v7v.png',
      cover_title:'Sony α',
      title: 'Sony α',
      date:'12.2020',
      type:'web design / front-end',
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
      cover:'https://i.imgur.com/ihB2a9x.png',
      cover_title:'新北市政府觀光局<br>提案Demo',
      title: '新北市政府觀光局<br>提案Demo',
      date:'07.2020',
      type:'front-end',
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
      date:'6.2018',
      type:'web design / front-end',
      tag:[],
      url_name:'Natural n Vintage',
      url: 'https://naturalnvintage.com',
      descript:'',
      img:[
        {src:'https://imgur.com/90a3s1n.png',descript:''},
        {src:'https://imgur.com/C80aZOZ.png',descript:''},
        {src:'https://imgur.com/0N5OlTS.png',descript:''},
        {src:'https://imgur.com/cyrmfoH.png',descript:''},
        {src:'https://imgur.com/M3WHaTx.png',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/GuC2C44.png',
      cover_title:'AQUOS<br>sense4 Plus',
      title: 'AQUOS<br>sense4 Plus',
      date:'11.2020',
      type:'web design / front-end',
      tag:['ScrollTrigger','ahrelax'],
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
      date:'03.2021',
      type:'web design / front-end',
      tag:['GSAP','Locomotive-Scroll'],
      url_name:'AQUOS sense5G',
      url: 'https://aquosmobile.sharp.com.tw/WebSubSite/aquos/sense5G.html',
      descript:'',
      img:[
        {src:'https://i.imgur.com/KyxVYtQ.gif',descript:''},
        {src:'https://i.imgur.com/vI2vSS6.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/zaDX4Za.jpg',
      cover_title:'松菸360°導覽提案Demo',
      title: '松菸360°導覽提案Demo',
      date:'03.2021',
      type:'front-end',
      tag:['Panolens'],
      url_name:'360°導覽',
      url: 'http://blog.jk2u.com/work_site/jk2u_test/leo/360tour/',
      descript:'此為提案階段之Demo頁面',
      img:[
        {src:'https://i.imgur.com/zaDX4Za.jpg',descript:''},
        {src:'https://i.imgur.com/j4jHI9k.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end'],
      cover:'https://i.imgur.com/4GUOi98.png',
      cover_title:'Fayd 飛宜得',
      title: 'Fayd 飛宜得',
      date:'02.2021',
      type:'front-end',
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
      category:['front_end','design'],
      cover:'https://i.imgur.com/c2nPBUb.png',
      cover_title:'2021得利空間<br>色彩趨勢',
      title: '2021得利空間色彩趨勢',
      date:'09.2020',
      type:'web design / front-end',
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
      category:['design'],
      cover:'https://i.imgur.com/yMsdwwZ.jpg',
      cover_title:'元大期貨 iTrader<br>網頁視覺提案',
      title: '元大期貨 iTrader<br>網頁視覺提案',
      date:'11.2020',
      type:'web design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://i.imgur.com/IF1YdNr.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/jcquZ7j.jpg',
      cover_title:'松菸官網改版提案',
      title: '松菸官網改版提案',
      date:'03.2021',
      type:'web design',
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
      cover:'https://imgur.com/1VbHJcf.png',
      cover_title:'Side Chair海報',
      title: 'Side Chair海報',
      date:'12.2018',
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
      date:'8.2018',
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
      date:'11.2017',
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
      date:'11.2016',
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
      date:'4.2016',
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
      date:'9.2016',
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
      hide:false,
      id:'',
      category:['design'],
      cover:'https://imgur.com/RqYiOWH.png',
      cover_title:'NUU Club貼紙',
      title: 'NUU Club貼紙',
      date:'10.2016',
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
      date:'6.2017',
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
      date:'6.2019',
      type:'web design / front-end',
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
      date:'11.2018',
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
      date:'11.2018',
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
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/w9Imc03.jpg',
      cover_title:'台啤特釀研究室<br>平面視覺提案',
      title: '台啤特釀研究室<br>平面視覺提案',
      date:'01.2021',
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
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/MQSDhBi.jpg',
      cover_title:'高雄華航春節Banner',
      title: '高雄華航春節Banner',
      date:'01.2021',
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
      hide:false,
      id:'',
      category:['design'],
      cover:'https://i.imgur.com/FaMCdqI.jpg',
      cover_title:'2020華航雄U號LP提案',
      title: '2020華航雄U號LP提案',
      date:'02.2020',
      type:'web design',
      tag:[],
      url_name:'',
      url: '',
      descript:'',
      img:[
        {src:'https://i.imgur.com/FaMCdqI.jpg',descript:''},
        {src:'https://i.imgur.com/h0QLcve.jpg',descript:''}
      ]
    },{
      hide:false,
      id:'',
      category:['front_end','design'],
      cover:'https://i.imgur.com/SgZecV1.jpg',
      cover_title:'Sharp AQUOS X e-Sports',
      title: 'Sharp AQUOS X e-Sports',
      date:'07.2020',
      type:'web design',
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

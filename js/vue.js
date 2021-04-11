Vue.use(VueLazyload)


var app = new Vue({
  el: '#app',
  data: {
    show:true,
    id:'0',
    tab:['front_end'],
    works:[{
      id:'0',
      category:[],
      cover:'',
      cover_title:'',
      title: '',
      date:'',
      type:'',
      tag:[],
      url_name:'',
      url: '',
      img:[
        ''
      ]
    },{
      id:'1',
      category:['front_end','design'],
      cover:'https://imgur.com/0TTpgFE.png',
      cover_title:'Natural n Vintage官網',
      title: 'Natural n Vintage<br>官方網站',
      date:'6.2018',
      type:'web design / front-end',
      tag:[],
      url_name:'Natural n Vintage',
      url: 'naturalnvintage.com',
      img:[
        'https://imgur.com/90a3s1n.png',
        'https://imgur.com/C80aZOZ.png',
        'https://imgur.com/0N5OlTS.png',
        'https://imgur.com/cyrmfoH.png',
        'https://imgur.com/M3WHaTx.png'
      ]
    },{
      id:'2',
      category:['design'],
      cover:'https://imgur.com/1VbHJcf.png',
      cover_title:'Side Chair海報',
      title: 'Side Chair海報',
      date:'12.2018',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/uA76D2P.png'
      ]
    },{
      id:'3',
      category:['design'],
      cover:'https://imgur.com/HNg3XsA.png',
      cover_title:'New Antiques Online',
      title: 'New<br>Antiques<br>Online!',
      date:'8.2018',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/PMkTKHb.png',
        'https://imgur.com/0n12ICb.png'
      ]
    },{
      id:'4',
      category:['design'],
      cover:'https://imgur.com/u9vjgiU.png',
      cover_title:'國立聯合大學<br>45週年校慶',
      title: '國立聯合大學<br>45週年校慶',
      date:'11.2017',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/ZyBVYGJ.png',
        'https://imgur.com/PaJ3goJ.png',
        'https://imgur.com/Yn24LlM.png',
        'https://imgur.com/CGja3Bo.png'
      ]
    },{
      id:'5',
      category:['design'],
      cover:'https://imgur.com/KLUcuNF.png',
      cover_title:'國立聯合大學<br>44週年校慶',
      title: '國立聯合大學<br>44週年校慶',
      date:'11.2016',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/JQE9f3y.png',
        'https://imgur.com/BnnWUFY.png',
        'https://imgur.com/LFm7obU.png',
        'https://imgur.com/1pJJPg4.png'
      ]
    },{
      id:'6',
      category:['design'],
      cover:'https://imgur.com/OX8Dp0p.png',
      cover_title:'NUR / SCHO KO',
      title: 'NUR<br>/<br>SCHO<br>KO',
      date:'4.2016',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/ZwzlGIe.png',
        'https://imgur.com/eglCjU0.png',
        'https://imgur.com/4ZZ00Mp.png',
        'https://imgur.com/yqxLjGh.png'
      ]
    },{
      id:'7',
      category:['design'],
      cover:'https://imgur.com/5yrQibe.png',
      cover_title:'初夜',
      title: '初夜',
      date:'9.2016',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/PzyVivr.png',
        'https://imgur.com/O9JwdPp.png',
        'https://imgur.com/uwHZB2u.png'
      ]
    },{
      id:'8',
      category:['design'],
      cover:'https://imgur.com/RqYiOWH.png',
      cover_title:'NUU Club貼紙',
      title: 'NUU Club貼紙',
      date:'10.2016',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/RqYiOWH.png',
        'https://imgur.com/NO668BD.png',
        'https://imgur.com/W0H5qYk.png'
      ]
    },{
      id:'9',
      category:['design'],
      cover:'https://imgur.com/T8bbudk.png',
      cover_title:'聯大吉祥物提案',
      title: '聯大吉祥物提案',
      date:'6.2017',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/T8bbudk.png',
        'https://imgur.com/Dl5Wx77.png'
      ]
    },{
      id:'10',
      category:['front_end','design'],
      cover:'https://imgur.com/yxZIS4o.png',
      cover_title:'聯大華文系歡迎頁',
      title: '聯大華文系歡迎頁',
      date:'6.2019',
      type:'web design / front-end',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/vZyEXFC.png',
        'https://imgur.com/HpQXdgm.png'
      ]
    },{
      id:'11',
      category:['design'],
      cover:'https://imgur.com/eH0OrM0.png',
      cover_title:'facebook行銷組圖',
      title: 'facebook行銷組圖',
      date:'11.2018',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/M9oUCYq.png',
        'https://imgur.com/1tYvoAC.png'
      ]
    },{
      id:'12',
      category:['design'],
      cover:'https://imgur.com/av4oGMq.png',
      cover_title:'估價單設計',
      title: '估價單設計',
      date:'11.2018',
      type:'graphic design',
      tag:[],
      url_name:'',
      url: '',
      img:[
        'https://imgur.com/av4oGMq.png',
        'https://imgur.com/gPTv1gd.png'
      ]
    },{
      id:'13',
      category:['front_end'],
      cover:'https://i.imgur.com/GuC2C44.png',
      cover_title:'AQUOS sense4 Plus官網',
      title: 'AQUOS<br>sense4 Plus官網',
      date:'11.2020',
      type:'web design / front-end',
      tag:['GSAP','ahrelax'],
      url_name:'AQUOS sense4 Plus',
      url: 'https://aquosmobile.sharp.com.tw/WebSubSite/aquos/sense4.html',
      img:[
        'https://i.imgur.com/GuC2C44.png',
        'https://i.imgur.com/QHrL1FQ.png',
        'https://i.imgur.com/ECnyiri.png',
        'https://i.imgur.com/ZxAHnv2.png'
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
  updated: function () {
    this.$nextTick(function () {
      waterfall('.waterfall span');
      var v = this;
      setTimeout(function(){
        v.show=true;
        waterfall('.waterfall span');
      },350)
      setTimeout(function(){
        waterfall('.waterfall span');
      },1000)
    })
  }
})

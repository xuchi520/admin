<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>后台管理</h2>
          <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
          </template>
        </div>
        <div class="index-left-block lastest-news">
          <h2>最新消息</h2>
          <ul>
          <li v-for="item in newsList ">
            <a :href="item.url" class="new-item">{{item.title}}</a>
          </li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <slide-show :slides="slides" :inv="invTime"></slide-show>
        <div class="index-board-list">
            <div class="index-board-item"
                 v-for="(item,index) in boardList"
                 :class="[{'line-last':index % 2 !== 0},
                 'index-board-'+item.id]">
                    <div class="index-board-item-inner">
                      <h2>{{item.title}}</h2>
                      <p>{{item.description}}</p>
                      <div class="index-board-button">
                        <a href="{path:'/'}" class="button">立即加入</a>
                      </div>
                    </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
import slideShow from '../components/slideShow.vue'
    export default {
      created(){
        this.$http.get('api/getNewsList').then((res)=> {
         this.newsList=res.data
        },(err)=> {
          console.log(err);
        })
      },
        data() {
            return {
              invTime:2000,
              slides: [
                {
                  src: require('../assets/slideShow/1.jpg'),
                  href: '/detail/analysis'
                },
                {
                  src: require('../assets/slideShow/2.jpg'),
                  href: '/detail/count'
                },
                {
                  src: require('../assets/slideShow/3.jpg'),
                  href: '/detail/forecast'
                },
              ],
              boardList: [
                {
                  title: '成为蜘点代理商',
                  description: '收益高，发展空间大',
                  id: 'car',
                  toKey: 'analysis',
                  saleout: false
                },
                {
                  title: '品牌营销',
                  description: '品牌营销帮助你的产品更好地找到定位',
                  id: 'earth',
                  toKey: 'count',
                  saleout: false
                },
                {
                  title: '使命必达',
                  description: '使命必达快速迭代永远保持最前端的速度',
                  id: 'loud',
                  toKey: 'forecast',
                  saleout: true
                },
                {
                  title: '勇攀高峰',
                  description: '帮你勇闯高峰，到达事业的顶峰',
                  id: 'hill',
                  toKey: 'publish',
                  saleout: false
                }
              ],
              newsList:[

              ],
              productList:{
                pc:{
                  title:'账户管理',
                  list:[
                    {
                      name:'用户设置',
                      url:'http://starcraft.com'
                    },
                    {
                      name:'修改密码',
                      url:'http://warcraft.com'
                    },
                    {
                      name:'商户管理',
                      url:'http://voerwatch.com',
                    },
                    {
                      name:'营销管理',
                      url:'http://hearstone.com',
                      hot:true
                    },
                  ]
                },
                app:{
                  title:'订单管理',
                  last:true,
                  list:[
                    {
                      name:'订单列表',
                      url:'http://weixin.com'
                    },
                    {
                      name:'用户统计',
                      url:'http://weixin.com',
                      hot:true
                    },{
                      name:'营业情况',
                      url:'http://weixin.com'
                    },
                    {
                      name:'退款售后',
                      url:'http://weixin.com'
                    },


                  ]
                }
              }
            }
        },
        computed: {},
        components: {slideShow},
        methods: {}
    }
</script>
<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #d43f3a;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul  {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;

  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

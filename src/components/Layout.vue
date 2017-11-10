<template>
<div @click="resetComponent">
  <div class="app-head">
    <div class="app-head-inner">
      <router-link :to="{path:'/'}">
      <img src="../assets/logo.png">
      </router-link>
      <div class="head-nav">
        <ul class="nav-list">
          <li> {{ username }}</li>
          <li v-if="username!== ''" class="nav-pile">|</li>
          <li v-if="username!== ''" @click="quit">退出</li>
          <li v-if="username=== ''" @click="logClick">登录</li>
          <li class="nav-pile">|</li>
          <li v-if="username=== ''" @click="regClick">注册</li>
          <li v-if="username=== ''" class="nav-pile">|</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="app-context">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
  <div class="app-foot">
    <p>@ 2017 蜘点生活</p>
  </div>
  <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
    <p>
      集团概况： 蜘点集团有限公司，创建于2015年12月3日，注册资本60000万元人民币，是国内首家践行“互联网+物流+商流”线上下一体化发展思路的高新科技企业。总部设在北京财金大动脉CBD沿线。 集团事业，主要由商流事业、物流事业两大事业体构成，分别通过蜘点商业网络服务有限公司、蜘点网络科技有限公司运作实现。 其中，蜘点商业网络服务有限公司专注于构建商流体系，目前正在构建的板块：蜘点产品集采中心、蜘点移动商城、蜘点生活平台、蜘点批发商城和全国客户服务中心等板块。 蜘点网络科技有限公司，下辖遍布全国的蜘点分支运营机构，专注于大物流体系打造，目前正在构建的板块：蜘点大物流平台、蜘点全国综合仓众创网络和蜘点全国物流中心。</p>
  </my-dialog>
  <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
    <log-form @has-log="onSuccessLog"></log-form>
  </my-dialog>
  <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
    <reg-form></reg-form>
  </my-dialog>
</div>
</template>
<script>
import {eventBus} from '../../eventBus'
import Dialog from './base/dialog.vue'
import logForm from '../components/logForm.vue'
import regForm from '../components/regForm.vue'
    export default {
        data() {
            return {
              isShowAboutDialog: false,
              isShowLogDialog:false,
              isShowRegDialog:false,
              username:'',

            }
        },
        computed: {},
        components: {MyDialog: Dialog,logForm,regForm},
        methods: {
          aboutClick (){
            this.isShowAboutDialog = true
          },
          logClick(){
            this.isShowLogDialog=true
          },
          regClick(){
            this.isShowRegDialog=true
          },
          closeDialog(attr){
            this[attr] = false
          },
          onSuccessLog (data) {
            console.log(data)
            this.closeDialog ('isShowLogDialog')
            this.username = data.username
          },
          resetComponent(){
            eventBus.$emit('reset-component')
          },
          quit(data){
            this.username=data.username=''
          },
        }
    }
</script>
<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .app-head {
    background: #fff;
    color: #666;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  img{

  }
  .head-logo {
    float: left;
  }
  .app-head-inner img {
    width: 100px;
    margin-top: 20px;
    margin-left: 20px;

  }
  .head-nav {
    float: right;
  }
  .head-nav ul {
    overflow: hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #d43f3a;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #4fc08d;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>

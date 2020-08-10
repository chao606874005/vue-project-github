<template>
    <a-layout-header class="header">
      <LogoSvg class="logo"/>
      <!-- 头部-左侧菜单栏 -->
      <ul class="menu">
        <li class="menuitem" 
        v-for="(item, i) of menulist" :key="i">
          <router-link class="menuitem__link" :to="item.path">
            <span class="menuitem__link-name">{{ item.name }}</span>
            <span v-if="item.type === curHeaderMenu" class="menuitem__link-line"></span>
            </router-link>
        </li>
      </ul>
      <!-- 头部-右侧信息栏 -->
      <div class="enter">
        <div class="enter__item" style="cursor: default;">
            <HeaderAccountSvg />
            <span class="enter__item-text">18126795010</span>
            <a-icon type="caret-down" :style="{ fontSize: '10px','margin-left':'10px'}"/>
            <span class="caret"></span>
            <div class="account-bg">
              <div class="account__block10"></div>
              <div class="account">
              <div class="account__info">
                <div class="account__info-icon"></div>
                <p class="account__info-desc">18126795010
                  <br/>
                  <span class="account__info-version">版本：VIP</span>
                </p>
              </div>
              <ul class="account__skip">
                <router-link to="/account">账号中心</router-link>
                <a @click="showModal" href="javascript:;">问题建议</a>
              </ul>
              
              <!-- 退出 -->
              <div class="account__logout" @click="_logout">退出</div>
            </div>
          </div>
        </div>
        <!-- 消息中心 -->
        <router-link class="enter__item" to="/news">
            <HeaderNewsSvg />
            <span v-if="curUserInfo.unreadMsgCount" class="enter__item-notice"></span>
        </router-link>
    </div>

      <!-- 问题建议弹框 -->
      <a-modal class="suggest" v-model="visible" :centered="true" cancelText="取消" okText="提交" title="问题建议" 
        :ok-button-props="{ props: { disabled: uploadEmpty } }"
        @ok="submitSuggest">
        <p>
          <span class="suggest__title">标题</span>
          <a-input class="suggest__input" v-model="suggestParams.title" placeholder="" />
        </p>
        <p>
          <span class="suggest__title">问题描述</span>
          <a-textarea  class="suggest__input" v-model="suggestParams.description" placeholder="" :rows="4" />
        </p>
        <p>
          <span class="suggest__title"></span>
          <a-upload
            class="suggest__input"
            action="http://live.21cn.com/api/v1/video/uploadPic"
            :multiple="false"
            :file-list="fileList"
            accept=".jpg,.png"
            @change="handleChange"
          > 
            <template v-if="fileList.length === 0">
              <a-icon type="paper-clip" style="color:#2B70FF;margin-right:8px" />添加附件
            </template>
          </a-upload>
        </p>
      </a-modal>
    </a-layout-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
// import { logout, addquestion } from '../service'
import LogoSvg from '../assets/images/svg/logo.svg';
import HeaderAccountSvg from '../assets/images/svg/headerAccount.svg';
import HeaderNewsSvg from '../assets/images/svg/headerNews.svg';

export default {
  name: 'Header',
  props: {
    activeMenu: {
      type: String
    }
  },
  components: {
    LogoSvg,
    HeaderNewsSvg,
    HeaderAccountSvg
  },
  data () {
      return {
        // HeaderLiveSvg,
        // HeaderPointSvg,
        menulist: [
          { type: 'homepage', name: '首页', path: '/' },
          { type: 'live', name: 'Vue知识点', path: '/knowledge' },
        ],
        // 问题建议
        visible: false,
        headers: {
          authorization: 'authorization-text',
        },
        suggestParams: {
          title: '',
          description: '',
          accessorId: ''
        },
        fileList: [],
      }
  },
  computed: {
    ...mapState([
      'curHeaderMenu',
      'curUserInfo'
    ]),
    uploadEmpty() {
      return !(this.suggestParams.title && this.suggestParams.description)
    }
  },
  created() {
  },
  methods: {
    ...mapMutations([
      // 'changeCurHeaderMenu',
    ]),
    // 退出
    _logout() {
      console.log('logout')
    },
    showModal() {
      this.visible = true;
    },
    submitSuggest() {
      console.log(this.fileList)
      if(this.fileList[0] && this.fileList[0].response.data) {
        this.suggestParams.accessorId = this.fileList[0].response.data[0].src
      }
      // addquestion(this,this.suggestParams).then(res=>{
      //   if(res.code===0){
      //     this.$message.success('问题建议提交成功！')
      //     this.visible = false;
      //     // 重置建议
      //     this.$set(this.suggestParams,'title','')
      //     this.$set(this.suggestParams,'description','')
      //     this.$set(this.suggestParams,'accessorId','')
      //     this.$set(this,'fileList',[])
      //   }
      // }).catch(err=>{
      //   console.log(err)
      //   this.$message.error('网络异常，请重试！')
      // })
    },
    // 意见上传
    handleChange(info) {
      let fileList = [...info.fileList];
      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-2);

      // 2. read from response and show file link
      fileList = fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      });

      this.fileList = fileList;
      console.log('fileList',this.fileList)
    },
  }
}
</script>

<style lang="less" scoped>
.anticon svg{
  width: 100% !important;
  height: 100% !important;
}
.header{
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0 2px 6px 0 rgba(11,29,66,0.20);
  font-size: 14px;
  color: #FFF;
}
.logo{
    display: block;
    width: 214px;
    height: 25px;
    margin-right: 40px;
    // background: url("../assets/images/svg/logo.svg") no-repeat center;
    background-size: 100% 100%;
    cursor: pointer;
    svg{
      width: 100%;
      height: 100%;
    }
}
.menu{
    display: flex;
    margin: 0;
}
.menuitem {
  padding: 0;
  margin-right: 30px;
  cursor: pointer;
  &__link{
    position: relative;
    &-name{
      font-size: 14px;
      color: #FFF;
      line-height: 24px;
      padding-bottom: 8px;
    }
    &-line{
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 2px;
      background: #FFF;
    }
  }
}
.enter{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    &__item{
      display: flex;
      align-items: center;
      position: relative;
      margin-right: 30px;
      color: #FFFFFF;
      cursor: pointer;
      &:last-child{
        margin-right: 0;
      }
      &:hover{
        .account-bg{
          display: block;
        }
      }
      &-text{
        margin-left: 10px;
      }
      &-notice{
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(6px, 16px);
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background: #F63C35;
      }
    }
}
.account-bg{
  display: none;
  position: absolute;
  top: 46px;
  left: -100px;
  z-index: 99;
  width: 240px;
  padding-top: 9px;
}
.account{
  background: #FFFFFF;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
  &__info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 74px;
    margin-bottom: 8px;
    padding: 0 25px;
    background: #F4F6F8;
    border-bottom: 1px solid #EEE;
    &-icon{
      width: 40px;
      height: 40px;
      margin-right: 12px;
      background-image: url('../assets/images/portrait-small.png');
    }
    &-desc{
      flex: 1;
      font-size: 14px;
      color: #000000;
      line-height: 24px;
    }
    &-version{
      font-size: 12px;
      color: #888888;
      line-height: 18px;
    }
  }
  &__skip {
    padding-bottom: 8px;
    border-bottom: 1px solid #EEE;
    a{
      display: block;
      padding: 0 25px;
      font-size: 12px;
      color: #000000;
      line-height: 32px;
      &:hover{
        background: #F4F6F8;
      }
    }
  }
  &__logout{
    line-height: 48px;
    padding: 0 25px;
    font-size: 12px;
    color: #000000;
    cursor: pointer;
    &:hover{
      background: #F4F6F8;
    }
  }
}

.suggest{
  p {
    display: flex;
    margin-bottom: 20px;
  }
  &__title{
    width: 88px;
    line-height: 32px;
  }
  &__input{
    flex: 1;
  }
}
</style>
<style lang="less">
.suggest__input {
  .ant-upload{
    font-size: 14px;
    color: #2B70FF;
  }
  .ant-upload-list-item-info {
    color: #2B70FF;
    padding-left: 0;
  }
  .anticon-paper-clip,
  .ant-upload-list-item-name{
    max-width: 340px;
    color: #2B70FF !important;
  }
  .ant-upload-list-item{
    margin-top: 0;
  }
}
</style>

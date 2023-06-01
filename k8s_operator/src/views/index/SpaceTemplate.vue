<template>
  <div class="space-template">
      <div class="space-template-item">
        <div class="template">
          <div class="template-img">
            <img src="~assets/logos/python.jpg" />
          </div>
          <div class="template-desc">
            <div class="template-title">All in One</div>
            <div class=template-version>支持Go、Python、vue等</div>
          </div>
          <div class="template-edit" @click="show_more('all')">
            <i class="el-icon-more"></i>
            <div class="template-more" v-show="showMore=='all'" @click.stop>
              <div>
                启动
              </div>
              <div>
                停止
              </div>
              <div>
                删除
              </div>
            </div>
          </div>
        </div>
        <div class="template">
          <div class="template-img">
            <img src="~assets/logos/python.jpg" />
          </div>
          <div class="template-desc">
            <div class="template-title">Python</div>
            <div class=template-version>Python 3.8.10</div>
          </div>
          <div class="template-edit" @click="show_more('python')">
            <i class="el-icon-more"></i>
            <div class="template-more" v-show="showMore=='python'" @click.stop>
              <div>
                启动
              </div>
              <div>
                停止
              </div>
              <div>
                删除
              </div>
            </div>
          </div>
        </div>
        <div class="template">
          <div class="template-img">
            <img src="~assets/logos/go.png" />
          </div>
          <div class="template-desc">
            <div class="template-title">Go</div>
            <div class=template-version>Go 1.19.5</div>
          </div>
          <div class="template-edit" @click="show_more('go')">
            <i class="el-icon-more"></i>
            <div class="template-more" v-show="showMore=='go'" @click.stop>
              <div>
                启动
              </div>
              <div>
                停止
              </div>
              <div>
                删除
              </div>
            </div>
          </div>
        </div>
        <div class="template">
          <div class="template-img">
            <img src="~assets/logos/java.jpg" />
          </div>
          <div class="template-desc">
            <div class="template-title">Java</div>
            <div class=template-version>JDK 1.8.0 Maven 3.8.1</div>
          </div>
          <div class="template-edit" @click="show_more('java')">
            <i class="el-icon-more"></i>
            <div class="template-more" v-show="showMore=='java'" @click.stop>
              <div>
                启动
              </div>
              <div>
                停止
              </div>
              <div>
                删除
              </div>
            </div>
          </div>
        </div>
        <div class="template">
          <div class="template-img">
            <img src="~assets/logos/ubuntu.png" />
          </div>
          <div class="template-desc">
            <div class="template-title">Ubuntu 18.04</div>
            <div class=template-version>内置Python3.8.10</div>
          </div>
          <div class="template-edit" @click="show_more('ubuntu')">
            <i class="el-icon-more"></i>
            <div class="template-more" v-show="showMore=='ubuntu'" @click.stop>
              <div>
                启动
              </div>
              <div>
                停止
              </div>
              <div>
                删除
              </div>
            </div>
          </div>
        </div>
        <div class="template">
          <div class="template-img">
            <img src="~assets/logos/vue.jpg" />
          </div>
          <div class="template-desc">
            <div class="template-title">Vue</div>
            <div class=template-version>Vue 2.6.25</div>
          </div>
          <div class="template-edit" @click="show_more('vue')">
            <i class="el-icon-more"></i>
            <div class="template-more" v-show="showMore=='vue'" @click.stop>
              <div>
                启动
              </div>
              <div>
                停止
              </div>
              <div>
                删除
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMore:"",
      // resource: "space_template",
    }
  },
  components: {
  },
  mounted() {
    // this.resource = "space_template"
  },
  methods: {
    show_more(field){
      if(this.showMore == "" || this.showMore != field){
        this.showMore = field
      }else{
        this.showMore = "";
      }
      
    }
  },
}

</script>
<style scoped>
  .space-template{
      /* margin:44px 0 0 80px; */
      /* position: absolute;
      top: 44px;
      left: 100px;
      right: 0;
      bottom: 0; */
      width: 100%;
  }
  .space-template .space-template-item{
    display: flex;
    justify-content: stretch;
    align-items: center;
    /* width: 100%; */
    flex-wrap: wrap;
    margin:44px 0 0 100px;
    /* text-align: center; */
  }
  .space-template-item .template{
      background-color: white;
      flex: 0 0 24%;
      height: 200px;
      margin: 0 10px 20px 0;
      border:1px solid lightgray
  }
  .space-template-item .template .template-img{
    margin: 60px 0 0 10px;
    float: left;
  }
  .space-template-item .template .template-img img{
    width: 80px;
    height: 60px;   
  }
  .space-template-item .template .template-desc{
    margin: 60px 0 0 5px;
    float: left;
    font-size: 18px;
  }
  .space-template-item .template .template-desc .template-title{
    /* margin: 60px 0 0 20px; */
    /* float: left; */
  }
  .space-template-item .template .template-desc .template-version{
    margin: 3px 0 0 0;
    color: gray;
    font-size: 12px;
  }
  .space-template-item .template .template-edit{
    float: right;
    margin: 0 10px 0 0;
    font-size: 30px;
    color: slategray;
    text-align: center;
  }
  .template-more{
    position: relative;
    bottom: 9px;
    width: 36px;
    background: slategray;
    font-size: 12px;
    text-align: center;
    color: white;
    padding: 5px 0;
  }
</style>

<template>
    <div class="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return {
                message:'',
                isShow:false,
                interval: null,
            }
        },
        methods:{
            show(message,duration){//调用show自动显示和消失
                console.log(duration,"+++++++++")
                clearInterval(this.interval)
                this.isShow = true;
                this.message = message;
                this.interval = setInterval(()=>{
                    this.isShow = false;
                    this.message = '';
                },duration)
                // console.log(duration,"+++++++++")
                // clearInterval(this.interval)
            }
        }
    }
</script>

<style scoped>
.toast{
    font-size: 14px;
    position: fixed;
    left: 49%;
    top: 10%;
    background-color: rgba(255, 135, 0, 0.25);
    border-radius: 4px;
    transform: translate(-50%,-50%);
    padding: 18px 20px;
    color: #ff6b0f;
    opacity: unset;
    z-index: 9999;
  }
</style>
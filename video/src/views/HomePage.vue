<template>
  <div>
    <HelloWorld
      url="https://tse2-mm.cn.bing.net/th/id/OIP-C.Ibx5SSeZTLfll68KuL7dpQAAAA?pid=ImgDet&rs=1"
    />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
  name: 'HomePage',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: '首页'
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <!--일반 버튼과 비교-->
  <button>aa</button>
  <br>
  <MyButton >button</MyButton>
  <br>
  <MyButton lg background-white>button</MyButton>
  <br>
  <MyButton sm pill text-red background-black>button</MyButton>
  <br>
  <MyButton md pill text-green background-pink>button</MyButton>
  <br>
  <MyButton lg pill @click.prevent="onClick">button</MyButton>
  <br>
  
  <br>
  <MyButton type="switch" backgroun-blue text-white v-model:active="active1">SWITCH</MyButton>
  <br>

</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MyButton from './components/MyButton.vue'

export default {
  name : 'App',
  methods: {
    onClick(evt) {
      alert('Clicked')
    }
  },
  components : {
    MyButton,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

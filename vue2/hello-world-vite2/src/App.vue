<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '/@components/HelloWorld.vue'
import VBindVModelTest from '/@components/VBindVModelTest.vue'
import VIf from '/@components/VIf.vue'
import VFor from '/@components/VFor.vue'
import Computed from '/@components/Computed.vue'
import WatchWatchEffect from '/@components/WatchWatchEffect.vue'

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hr>
  <HelloWorld msg1="Hello Vue 3 + Vite" msg2="Test999"/>
  <hr>
  <VBindVModelTest />
  <hr>
  <VIf />
  <hr>
  <VFor />
  <hr>
  <Computed />
  <hr>
  <WatchWatchEffect />
</template>

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

<template>
  <div id="app">
    <component-navbar></component-navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    'component-navbar': Navbar
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
}

html {
  background-color: #DDD;
  padding: 0 1rem;
  text-align: center;
  font-family: sans-serif;
}
body {
  margin: 0;
}

.btn {
  background-color: white;
  border-color: #111;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 16px;
  transition-duration: 200ms;
}
.btn.btn-small {
  font-size: 12px;
  padding: 0.5rem 1rem;
}

.btn.btn-primary {
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #3FB0AC;
  color: #BBB;
}

.btn.btn-primary:hover {
  background-color: #3FB0AC;
  border-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}
</style>

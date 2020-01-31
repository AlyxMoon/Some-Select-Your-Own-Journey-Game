<template>
  <div id="navbar-wrapper">
    <nav id="component-navbar">
      <div class="nav-section heading">
        <router-link to="/">
          <img src="@/assets/img/logo.png" class="logo" />
          <span class="logo-text">Home</span>
        </router-link>
      </div>
      <div class="nav-section">
        <div class="dropdown">
          Options
          <div class="options">
            <label for="option-autoplay">
              <input name="option-autoplay" type="checkbox" v-model="config.autoplay" />
              Autoplay audio
            </label>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['config'],
}
</script>

<style scoped>
#navbar-wrapper {
  height: 52px;
}

nav {
  background-color: black;
  border-bottom: 2px solid #3FB0AC;
  color: #CCC;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 5px 10px;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
}

nav .heading {
  font-size: 32px;
}

nav a {
  text-decoration: none;
  color: #CCC;
  display: flex;
  align-items: center;
}

.logo {
  height: 30px;
  width: auto;
}

.logo-text {
  margin-left: 5px;
}
</style>

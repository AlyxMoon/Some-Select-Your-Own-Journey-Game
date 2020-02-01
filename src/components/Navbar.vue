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
          <span @click="showOptions = !showOptions">Options</span>
          <ul v-if="showOptions">
            <li>
              <label for="option-autoplay">
                <input name="option-autoplay" type="checkbox" v-model="config.autoplay" />
                Autoplay audio
              </label>
            </li>
            <li>
              <label for="option-betten">
                <input name="option-betten" type="checkbox" v-model="config.bettenTextMode" />
                Betten text mode
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['config'],
  data () {
    return {
      showOptions: false,
      bettenTextMode: false,
    }
  }
}
</script>

<style scoped>
#navbar-wrapper {
  height: 52px;
}

nav {
  background-color: #222222;
  border-bottom: 2px solid #3FB0AC;
  color: #CCC;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 5px 5vw 5px 1vw;
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

.dropdown {
  position: relative;
}

.dropdown > span {
  cursor: pointer;
}

.dropdown > ul {
  list-style: none;

  padding: 10px 20px;
  margin: 0;
  min-width: 150px;

  position: absolute;
  z-index: 5;
  top: 30px;
  right: 0;

  background-color: #222222;
  border-radius: 10px;
}

.dropdown > ul > li {
  text-align: left;
  padding: 10px 0;

  font-size: 18px;
  white-space: nowrap;
}

.dropdown > ul > li:not(:last-child) {
  border-bottom: 1px solid #3FB0AC;
}

.dropdown > ul > li label {
  display: flex;
}

.dropdown > ul > li input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  cursor: pointer;
}

</style>

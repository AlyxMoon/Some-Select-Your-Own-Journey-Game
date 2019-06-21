<template>
  <div id="navbar-wrapper">
    <nav id="component-navbar">
      <a href="/">
        <img src="@/assets/img/logo.png" class="logo" />
        <span class="logo-text">Home</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
#navbar-wrapper {
  height: 40px;
}

nav {
  background-color: black;
  border-bottom: 2px solid #3FB0AC;
  color: #CCC;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px 10px;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;

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

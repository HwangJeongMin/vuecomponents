<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/button">Buttons</router-link>|
      <router-link to="/date">DatePicker</router-link>|
      <router-link to="/SearchFilter">SearchFilter</router-link>|
      <router-link to="/Avatar">Avatar</router-link>|
      <router-link to="/Card">ContentCard</router-link>|
      <router-link to="/togglebutton">ToggleButton</router-link>|
      <router-link to="/videoplayer">videoplayer</router-link>|
      <router-link to="/chip">Chip</router-link>|
      <router-link to="/chart">Chart</router-link>|
      <router-link to="/RadioBTN">RadioBTN</router-link>|
      <router-link to="/CheckBTN">CheckBTN</router-link>|
      <router-link to="/TabMenu">TabMenu</router-link>|
      <router-link to="/NavMenu">NavMenu</router-link>|
      <router-link to="/SearchBar">SearchBar</router-link>|
      <router-link to="/Pagination">Pagination</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <el-menu
    class="el-menu-vertical"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template slot="title">
        <span>EcoAppart</span>
        <div></div>
      </template>
      <el-menu-item index="1-1">
        <nuxt-link to="/">Accueil</nuxt-link>
      </el-menu-item>
      <el-menu-item index="1-2">
        <nuxt-link to="/information">Information</nuxt-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
* {
  font-family: Roboto;
}
.el-menu {
  border-right: 0px;
}
.el-menu-vertical {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  &:after {
    display: none !important;
    border: none !important;
  }
  &:before {
    display: none !important;
    border: none !important;
  }
  &:focus {
    outline: none;
  }
  > li {
    &:focus {
      outline: none;
    }
    > div {
      background-color: $color-black !important;
      height: 40px;
      display: flex;
      span {
        text-align: left;
        line-height: 42px;
        color: $color-light-green;
      }
      div {
        line-height: 42px;
        margin-left: 5px;
        background-image: url('../static/logo.png');
        background-size: 25px;
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
        margin-top: 10px;
      }
    }
    > ul {
      li {
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
    .el-menu {
      background-color: $color-black !important;
      .el-menu-item.is-active {
        background-color: $color-black !important;
        color: $color-light-green !important;
      }
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
      outline: 0;
      background-color: #2b2b3e;
    }
  }
}
</style>

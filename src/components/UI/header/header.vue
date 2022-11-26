<template>
  <header class="header">
    <div class="header_container">
      <h2 class="header_title">Название страницы</h2>
      <ul class="header_links">
        <li class="header_link">Техподдержка</li>
        <li class="header_link">О нас</li>
        <li class="header_link">Правила</li>
      </ul>
      <div class="header_profile">
        <div class="header_userName">Пользователь</div>
        <div class="header_userName">X</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  padding: 1.5rem 3rem 1.5rem calc(13rem + 3rem);
  background: linear-gradient(to left, #1f0ccabc, #1ac10b 0%, #194fe4);
  color: #ffffff;
  box-shadow: 2px 1px 4px #14475c;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  &_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  &_title {
    font-size: 26px;
    font-weight: 500;
  }
  &_links {
    display: flex;
    gap: 3rem;
  }
  &_profile {
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 2px #1f0cca72;
    border-radius: 10px;
    padding: 10px 25px 10px 5px;
  }
  &_avatar {
    background-color: #ffffff;
    min-height: 3rem;
    min-width: 3rem;
    border-radius: 10px;
  }
  &_userName {
    padding: 0 0 0 1.5rem;
  }
}
</style>

<template>
  <div class="sidebar">
    <div class="sidebar_container">
      <div class="sidebar_logo">
        <h2>LapLas</h2>
      </div>
      <ul class="sidebar_list">
        <SidebarLink link="/form" title="Мой профиль" />
        <SidebarLink link="/hh" title="Вакансии" />
        <SidebarLink link="/habr" title="Статьи" />
        <SidebarLink link="/settings" title="Настройки" />
      </ul>
    </div>
    <div class="sidebar_advertise">Здесь могла быть ваша реклама</div>
  </div>
</template>

<script>
import SidebarLink from "./sidebarLink.vue";
export default {
  name: "sidebar",
  components: { SidebarLink },
};
</script>

<style lang="scss">
.sidebar {
  min-width: 13rem;
  max-width: 13rem;
  padding: 2rem 1.75rem;
  position: fixed;
  z-index: 30;
  left: 0;
  top: 0;
  background: linear-gradient(-30deg, #1f0cca, #37c627 0%, #194fe4);
  border-right: 1px solid #00000044;
  box-shadow: 3px 0px 4px #00000044;
  color: #ffffff;
  max-height: 100vh;
  height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    left: -100vw;
  }
  &_container {
  }
  &_logo {
    margin-bottom: 4rem;
    h2 {
      color: #ffffff;
      font-size: 40px;
      font-weight: 500;
    }
  }
  &_list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  &_item {
    transition: all 0.33s;
    padding: 0.4rem 0.75rem;
    border: 1px solid #ffffff11;
    background-color: #30a32831;
    color: #ffffff;
    border: 0.5px solid #ffffff;
    line-height: 1.25rem;
    border-radius: 10px;
    min-width: 80%;
    text-align: left;
    &:hover {
      background-color: #1caa1266;
      cursor: pointer;
    }
  }
  &_advertise {
    border: 1px solid #ffffff11;
    background-color: #28932130;

    border: 0.5px solid #ffffff;
    border-radius: 5px;
    min-width: 100%;
    font-size: 14px;
    padding: 10px;
  }
}
</style>

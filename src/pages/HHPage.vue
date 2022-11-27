<template>
  <div>
    {{ response }}
    <div class="hh_container">
      <div class="hh_item">
        <div class="hh_itemTop">
          <div class="hh_avatar">
            <img src="" alt="">
          </div>
        </div>
        <div>Ключевое слово</div>
        <div>Количество вакансий:</div>
        <div>Максимальная зарплата</div>
        <div>Минимальная зарплата</div>
        <div>Средняя зарплата</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HHPage",
  data() {
    return {
      response: null,
      hhItems: null,
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8080/api/keywords/hh?name=pidorasss")
      .then((res) => {
        console.log(res);
        this.response = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
.hh {
  &_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  &_item {
    min-width: 50vw;
    border-radius: 12px;
    padding: 1rem 1.5rem;
    color: #fff;
    background-color: #f4f3ff56;
    box-shadow: 7px 6px 3px #cff8c9;
    background-image: linear-gradient(-30deg, #1f0cca, #37c627 0%, #194fe4);
  }
  &_itemTop {
    display: flex;
    justify-content: space-between;
  }
}
</style>

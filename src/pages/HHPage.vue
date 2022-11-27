<template>
  <div>
    <div class="hh_container" v-if="hhItems !== null">
      <div class="hh_item" v-for="item in hhItems" :key="item">
        <div class="hh_itemTop">
          <div class="hh_itemTopLeft">
            <div class="hh_name">Ключевое слово: {{ item.word }}</div>
          </div>
        </div>
        <div class="hh_itemBody">
          <div class="statistic">
            <div class="statistic_founds">
              Количество вакансий: {{ item.founds }}
            </div>
            <div class="statistic_founds">
              Минимальная зарплата: {{ item.maxSal }}₽
            </div>
            <div class="statistic_founds">
              Максимальная зарплата: {{ item.minSal }}₽
            </div>
            <div class="statistic_founds">
              Средняя зарплата: {{ item.avgSal }}₽
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hh_loader" v-else>
      <div class="hh_container">
        <div class="hh_loaderItem"><q-skeleton width="60vw" height="150px" /></div>
        <div class="hh_loaderItem"><q-skeleton width="60vw" height="150px" /></div>
        <div class="hh_loaderItem"><q-skeleton width="60vw" height="150px" /></div>
        <div class="hh_loaderItem"><q-skeleton width="60vw" height="150px" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiMy } from "../boot/axios";

export default {
  name: "HHPage",
  data() {
    return {
      response: null,
      hhItems: null,
    };
  },
  mounted() {
    apiMy
      .get("api/keywords/hh?name=pidorasss")
      .then((res) => {
        console.log(res);
        this.response = res.data;
        this.hhItems = res.data;
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
  &_loader {
  }
  &_loaderItem {
    &:nth-child(2n) {
      justify-self: flex-end;
      margin-left: auto;
    }
  }
  &_item {
    min-width: 60vw;
    max-width: 60vw;
    border-radius: 12px;
    padding: 1rem 1.5rem;
    color: #000;
    background-color: #f4f3ff56;
    box-shadow: 7px 6px 3px #b2dfab;
    &:last-child {
      margin-bottom: 5rem;
    }
    &:nth-child(2n) {
      justify-self: flex-end;
      margin-left: auto;
    }
  }
  &_itemTop {
    display: flex;
    justify-content: space-between;
  }
  &_itemTopLeft {
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
  }
  &_avatar {
    border-radius: 50%;
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    background-image: linear-gradient(-30deg, #1f0cca, #37c627 0%, #194fe4);
  }
  &_dots {
    font-size: 30px;
    line-height: 20px;
    cursor: pointer;
  }
  &_itemBody {
    margin-top: 10px;
  }
  &_itemBottom {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &_views {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &_reactions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &_like {
    cursor: pointer;
    img {
      max-width: 25px;
      transform: rotate(180deg);
    }
  }
  &_dislike {
    cursor: pointer;
    img {
      max-width: 25px;
    }
  }
}
</style>

<template>
  <div>
    <div class="habr_container">
      <div class="habr_item" v-for="item in habrItems" :key="item">
        <div class="habr_itemTop">
          <div class="habr_itemTopLeft">
            <div class="habr_avatar"></div>
            <div class="habr_name">{{ item.title.substr(0, 27) + "..." }}</div>
          </div>
          <div class="habr_itemTopRight">
            <div class="habr_dots">
              <a class="" :href="'https://' +item.url" target="_blank"> Перейти к статье </a>
            </div>
          </div>
        </div>
        <div class="habr_itemBody">
          {{ item.body }}
        </div>
        <div class="habr_itemBottom">
          <div class="habr_reactions">
            <div class="habr_like">
              <img src="../assets/icons/like.svg" alt="" />
            </div>
            <div class="habr_dislike">
              <img src="../assets/icons/like.svg" alt="" />
            </div>
          </div>
          <div class="habr_views">
            <img src="../assets/icons/eye.svg" alt="" /> Просмотров: 0
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiMy } from "../boot/axios";

export default {
  name: "HabrPage",
  data() {
    return {
      response: null,
      habrItems: null,
    };
  },
  mounted() {
    apiMy
      .get("api/keywords/habr?name=pidorasss")
      .then((res) => {
        console.log(res);
        this.response = res.data;
        this.habrItems = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
.habr {
  &_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-bottom: 100px;
  }
  &_item {
    min-width: 50vw;
    max-width: 50vw;
    border-radius: 12px;
    padding: 1rem 1.5rem;
    color: #000;
    background-color: #f4f3ff56;
    box-shadow: 7px 6px 3px #b2dfab;
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
    font-size: 20px;
    cursor: pointer;
    a {
      color: #000;
    }
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

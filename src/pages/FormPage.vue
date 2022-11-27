<template>
  <!-- <div class="firstStep" v-if="step == 1">
    <div class="hightDomains">
      <h3>Что вам интересно?</h3>
      <div class="hightDomains_list">
        <div
          class="hightDomains_item"
          v-for="item in hightDomains"
          :key="item"
          @click="item.check = !item.check"
          :class="{ select: item.check }"
        >
          {{ item.name }}
        </div>
      </div>
      <button class="button_next" @click="step = 2">Далее</button>
    </div>
  </div> -->
  <div>
    <div class="blobPolygon">
      <h2 class="blobPolygon__title">
        Выберите сферу в которой хотите развиваться
      </h2>
      <div
        class="blobPolygon__blob"
        v-for="item in domains"
        :key="item"
        @click="
          (item.openState = !item.openState), (zIndexCount += 1), someFunc(item)
        "
        :class="{ translate: item.openState == true }"
        :style="{ 'z-index': item.zIndex }"
      >
        {{ item.name }}
        <!-- <div class="subdomens" v-if="item.openState == true">
            <div
              class="subdomens__item"
              v-for="subdomen in item?.subdomens"
              :key="subdomen"
            >
              <h6>{{ subdomen.name }}</h6>
              <div>+</div>
            </div>
          </div> -->
      </div>
    </div>
    <div class="blobFooter"></div>
  </div>
</template>

<script>
import MainTree from "../../MainTree.json"

export default {
  name: "FormPage",
  beforeMount() {
    setInterval(() => {
      const hueta = document.getElementsByClassName("blobPolygon__blob");
      for (let index = 0; index < hueta.length; index++) {
        const item = hueta[index];
        item.style.transform = `translate(${this.getRandomArbitrary(
          -20,
          70
        )}px,
        ${this.getRandomArbitrary(-20, 70)}px)`;

        item.style.borderRadius = `${this.getRandomArbitrary(50, 100)}%
        ${this.getRandomArbitrary(50, 100)}% / ${this.getRandomArbitrary(
          50,
          100
        )}%
        ${this.getRandomArbitrary(75, 100)}%`;
      }
    }, 2000);
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    someFunc(item) {
      item.zIndex = this.zIndexCount;
    },

    // requrseSerch(Tree){
    //   if ()
    // }
  },
  data() {
    return {
      zIndexCount: 1001,
      //   step: 1,
      hightDomains: [
        { name: "Web", check: false },
        { name: "Machine Learning", check: false },
        { name: "Testing", check: false },
        { name: "Big Data", check: false },
      ],
      domains: [
        { id: 1, name: "Front-End", openState: false, zIndex: 1000}
      ],
    };
  },
  created() {
    const Tree = MainTree
    console.log(Tree)

    // this.requrseSerch(Tree)
  }
};
</script>

<style lang="scss">
.button_next {
  padding: 10px;
  position: absolute;
  right: 40px;
  bottom: 30px;
  color: #fff;
  background: rgba(0, 0, 0, 0.348);
  border-radius: 12px;
  min-width: 200px;
}

.firstStep {
  position: relative;
  left: 0;
  padding: 10vh 10vw;
  background: linear-gradient(45deg, #0756c4b9 -50%, #0644b73d 70%);
}

.secondStep {
  position: relative;
  left: -100vw;
  padding: 10vh 10vw;
  background: linear-gradient(45deg, #0756c4b9 -50%, #0644b73d 70%);
}

.hightDomains {
  h3 {
    position: absolute;
    text-align: center;
    top: 100px;
  }
  position: relative;
  margin: 50px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 20px;
  color: #fff;
  border-radius: 90% 90% / 90% 90%;
  background: #061f83fc;
  background-image: linear-gradient(45deg, #3221c956 0%, #37ed27fc 100%);
  box-shadow: -2vmin 5vmin 0 rgba(255, 255, 255, 0.234);
  z-index: 100;
  width: 80vw;
  height: 80vh;
  border-radius: 30px;
  margin: 0;
  box-shadow: 0vmin 0vmin 0 rgba(255, 255, 255, 0.17);
  &_list {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 50%;
  }
  &_item {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 20px;
    color: #fff;
    background: rgba(255, 255, 255, 0.362);
    box-shadow: 1vmin 1vmin 0 rgba(255, 255, 255, 0.17);
    &.select {
      background: rgba(26, 197, 49, 0.3);

      box-shadow: 1vmin 1vmin 0 rgba(3, 30, 151, 0.37);
    }
    &:hover {
      box-shadow: 1.25vmin 1.25vmin 0 rgba(255, 255, 255, 0.17);
    }
  }
}

.blobPolygon {
  background: linear-gradient(45deg, #0756c4 0%, #0644b78d 70%);
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  padding-bottom: 50vh;
  padding-top: 10vh;
  padding-left: 2vw;
  &__title {
    background: linear-gradient(45deg, #19ac0cce 0%, #3221c956 100%);
    border-radius: 20px;
    box-shadow: 0.5vmin 1.25vmin 0 rgba(255, 255, 255, 0.17);
    font-weight: 600;
    z-index: 1010;
    font-size: 30px;
    margin: 0 17.5%;
    width: 60%;
    top: 5vh;
    position: absolute;
    text-align: center;
    color: #fff;
  }
  &__blob {
    cursor: pointer;
    position: relative;
    margin: 50px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: 20px;
    color: #fff;
    border-radius: 90% 90% / 90% 90%;
    width: 200px;
    height: 180px;
    background: #061f83fc;
    background-image: linear-gradient(45deg, #3221c956 0%, #37ed27fc 100%);
    box-shadow: -2vmin 5vmin 0 rgba(255, 255, 255, 0.234);
    transition: all 5s;
    // animation: blobAnim 15s linear infinite;
    &.full {
      z-index: 100;
      bottom: 0;
      left: 40vw;
      animation: blobBig 1s linear;
      padding: 20vh 20vw;
      width: 80vw;
      height: 80vh;
      border-radius: 30px;
      transition: all 1s, animation 1s, box-shadow 0s;
      margin: 0;
      box-shadow: 0vmin 0vmin 0 rgba(255, 255, 255, 0.17);
    }
    &.translate {
      z-index: 1009;
      position: fixed;
      bottom: -0vh;
      left: 40vw;
      animation: blobTranslate 1s linear;
      translate: all 6s, top 1s, bottom 1s;
      font-size: 15px;
      width: 150px;
      height: 140px;
      box-shadow: 0vmin 0vmin 0 rgba(255, 255, 255, 0.17);
    }
  }
}

.blobFooter {
  position: fixed;
  bottom: 0;
  display: flex;
  min-height: 100px;
  height: 100px;
  width: 100vw;
  background: linear-gradient(0deg, #ffffffdc, #37c627 0%, #1445cd00);
}

.subdomens {
  width: 100%;
  display: flex;
  gap: 10px;
  &__item {
    padding: 10px 20px;
    color: #000;
    background: rgb(255, 255, 255);
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
  }
}

@keyframes blobAnim {
  0% {
    border-radius: 100% 100% / 90% 90%;
    transform: translate(0px, 0px);
  }
  10% {
    border-radius: 60% 100% / 100% 60%;
    transform: translate(45px, 100px);
  }
  20% {
    transform: translate(70px, 14px);
    border-radius: 80% 90% / 100% 90%;
  }
  30% {
    border-radius: 100% 70% / 70% 100%;
    transform: translate(36px, 77px);
  }
  40% {
    border-radius: 100% 70% / 70% 100%;

    transform: translate(4px, 10px);
  }
  50% {
    border-radius: 100% 70% / 70% 100%;

    transform: translate(77px, 20px);
  }
  60% {
    border-radius: 100% 70% / 70% 100%;
    transform: translate(55px, 50px);
  }
  70% {
    border-radius: 80% 70% / 100% 100%;
    transform: translate(80px, 99px);
  }
  80% {
    border-radius: 100% 80% / 90% 100%;
    transform: translate(11px, 10px);
  }
  90% {
    border-radius: 100% 75% / 90% 90%;
    transform: translate(18px, 88px);
  }
  100% {
    border-radius: 90% 90% / 90% 90%;
    transform: translate(0px, 0px);
  }
}

@keyframes blobBig {
  0% {
    border-radius: 100% 75% / 90% 90%;
    transform: translate(0px, 0px);
    height: 180px;
    width: 200px;
  }
  33% {
    border-radius: 75% 66% / 76% 66%;
    width: 40vw;
    height: 50vh;
  }
  66% {
    border-radius: 53% 33% / 43% 53%;
    width: 60vw;
    height: 60vh;
  }
  100% {
    border-radius: 30px;
    height: 80vh;
    width: 80vw;
  }
}
@keyframes blobTranslate {
  0% {
    border-radius: 100% 75% / 90% 90%;
  }
  33% {
    border-radius: 100% 80% / 95% 90%;
  }
  66% {
    border-radius: 100% 90% / 95% 95%;
  }
  100% {
    border-radius: 100%;
  }
}
</style>

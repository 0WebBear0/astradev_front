<template>
  <div style="color: #1D1D1D; padding-top: 15vw; padding-left: 50vw ">
    {{ response }}
  </div>
</template>

<script>

import {apiMy} from "../boot/axios";

export default {
  name: "HHPage",
  data() {
    return {
      response : null
    }
  },
  mounted() {
    apiMy.get("api/keywords/hh?name=pidorasss")
      .then(
        (res)=> {
          console.log(res)
          this.response = res.data
        }
      )
      .catch((err)=>{
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>

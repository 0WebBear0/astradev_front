<template>
  <div style="color: #1D1D1D; padding-top: 15vw; padding-left: 50vw ">
    {{ response }}
  </div>
</template>

<script>

export default {
  name: "HHPage",
  data() {
    return {
      response : null
    }
  },
  mounted() {
    this.$axios.get("http://localhost:8080/api/keywords/hh?name=pidorasss")
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

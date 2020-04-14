<template>
  <div class="apod row mt-3">
    <div class="col-6 mx-auto">
      <h5>Astronomy Photo of the Day</h5>
      <h6>{{apodData.title}}</h6>
      <img class="img-fluid" :src="apodData.url" alt />
      <p class="mt-2">{{apodData.explanation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "apod",
  data() {
    return {};
  },
  computed: {
    apodData() {
      return this.$store.state.apod;
    }
  },
  created() {
    this.$store.dispatch("getApod");
  }
};
</script>

<style>
p {
  font-size: x-small;
}
</style>
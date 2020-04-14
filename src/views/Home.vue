<template>
  <div class="home container-fluid">
    <div class="row m-4">
      <div class="col-12 text-center">
        <h5>Fun with NASA API's</h5>
      </div>
    </div>
    <Banner></Banner>
    <APOD></APOD>
    <!-- EPIC -->
    <!-- Curiosity -->
    <!-- Spirit -->
    <!-- Opportunity -->
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner";
import APOD from "../components/APOD";

export default {
  name: "Home",
  components: { Banner, APOD }
};
</script>
<style>
</style>

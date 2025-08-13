<template>
  <v-app>
    <v-app-bar
      app
      color="#d3d3d3"

    >
      <div class="d-flex align-center">
       <v-icon
    class="mr-2"
    size="40"
    color="white"
  >
    mdi-fruit-pineapple
  </v-icon>

        <h1>uShop</h1>

      </div>

      <v-spacer></v-spacer>
       <v-btn text to="/" tag="router-link">
        <span>Home</span>
        <v-icon>mdi-home-account</v-icon>
        </v-btn>
        <v-btn text to="/purchase" tag="router-link">
        <span>Bag</span>
        <v-icon>mdi-cart-arrow-down</v-icon>
        </v-btn> 
        <v-btn text to="/newproduct" tag="router-link">
          <span>Add</span>
          <v-icon>mdi-plus</v-icon>
        </v-btn> 
      <v-btn text to="/Area" tag="router-link">
        <span>Area</span>
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <v-btn text to="/Weather" tag="router-link">
        <span>Weather</span>
        <v-icon>mdi-weather-cloudy</v-icon>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>

<style>
.d-flex h1{
  color: white;
}</style>


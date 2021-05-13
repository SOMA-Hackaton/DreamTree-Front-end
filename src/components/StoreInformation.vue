<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-card
        class="mx-auto my-12"
        style="overflow-y: scroll"
        height="600"
        max-width="375"
      >
        <img height="200" width="375" :src="store.imgurl" />

        <v-card-title
          ><v-icon class="mr-2">storefront</v-icon>
          {{ store.name }}</v-card-title
        >

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="store.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">
              {{ store.rating }}
            </div>
          </v-row>

          <div class="my-4 subtitle-1">{{ store.type }}, {{ store.dong }}</div>

          <div>{{ store.address }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title
          ><v-icon class="mr-2">restaurant</v-icon>대표메뉴</v-card-title
        >

        <v-card-text v-if="store.menus.length != 0">
          <v-row v-for="menu in store.menus" :key="menu.name">
            <v-col>
              <v-chip
                ><v-icon class="mr-2">credit_card</v-icon>{{ menu.name }}
                {{ menu.price }}</v-chip
              >
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text
          v-if="store.menus.length == 0"
          align="center"
          justify="center"
        >
          <div><v-icon x-large> error_outline</v-icon></div>
          <div><p>메뉴가 없습니다!</p></div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["store"],
});
</script>

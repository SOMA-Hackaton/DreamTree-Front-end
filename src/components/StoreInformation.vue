<template>
  <v-card class="mx-auto my-12" max-width="375">
    <img height="200" width="375" :src="store.imageurl" />

    <v-card-title
      ><v-icon class="mr-2">storefront</v-icon> {{ store.name }}</v-card-title
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

    <v-card-text>
      <v-row v-for="menu in store.menus" :key="menu.name">
        <v-col>
          <v-chip
            ><v-icon class="mr-2">credit_card</v-icon>{{ menu.menu }}
            {{ menu.price }}</v-chip
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["store"],
};
</script>

<template>
  <div class="store-list-container">
    <v-row align="center" justify="center">
      <v-col cols="10" align="right">
        <v-text-field
          class="ml-3 pl-3 mr-0 pr-0"
          v-model="storename"
          append-icon="mdi-magnify"
          label="매장검색"
          single-line
          hide-details
          v-on:keyup.enter="onSearchStores(storename)"
          @click:append="onSearchStores(storename)"
        ></v-text-field>
      </v-col>
      <v-col cols="2" align="right">
        <v-btn
          class="list-close-btn mr-0 pr-0"
          color="rgb(255,255,255)"
          elevation="0"
          @click="onCloseBtnClicked"
          small
          plain
        >
          <v-icon color="rgb(0,0,0)"> mdi-window-close </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-virtual-scroll
      v-if="stores.length != 0"
      :items="stores"
      item-height="120px"
    >
      <template v-slot:default="{ item }">
        <v-divider v-if="item != stores[0]"></v-divider>
        <v-list-item-content class="pl-3 ml-3" :key="item.address">
          <v-list-item-title style="font-size: 20px; font-weight: bold"
            ><v-icon class="mr-2">restaurant</v-icon>{{ item.name }}
            <v-chip class="ma-2">{{ item.type }}</v-chip></v-list-item-title
          >
          <v-list-item-subtitle style="font-size: 15px">{{
            item.address
          }}</v-list-item-subtitle>
          <v-rating
            :value="item.rating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
        </v-list-item-content>
      </template>
    </v-virtual-scroll>
    <v-list-item-content class="pl-3 ml-3" v-if="stores.length == 0">
      <v-list-item-title align="center" justify="center" class="ma-3">
        <v-icon class="mr-2">error_outline</v-icon>
      </v-list-item-title>
      <v-list-item-title
        align="center"
        justify="center"
        style="font-size: 20px; font-weight: bold"
      >
        조건에 맞는 업체가 없습니다!
      </v-list-item-title>
      <img
        height="400"
        width="375"
        src="https://user-images.githubusercontent.com/43667316/118182406-eddf3880-b473-11eb-95e6-ef5497c41731.png"
      />
    </v-list-item-content>
  </div>
</template>

<script>
import { Api } from "../service/api";

export default {
  props: {
    stores: Array,
  },
  data: () => ({
    storename: "",
  }),
  methods: {
    onCloseBtnClicked() {
      this.$emit("list-close");
    },
    async onSearchStores(storename) {
      this.stores = await Api.getStoresByName(storename);
      console.log(this.stores);
    },
  },
};
</script>
<style>
.store-list-container {
  z-index: 10;
  width: 400px;
  height: 100vh;
  position: absolute;
  background-color: white;
}
.list-close-btn {
  top: 1em;
  right: 1em;
  width: 1em;
}
</style>

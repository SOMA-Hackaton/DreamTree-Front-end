<template>
  <div>
    <v-btn
      @click="onListBtnClicked"
      class="list-btn"
      color="primary"
      elevation="5"
      fab
    >
      <v-icon> mdi-view-list </v-icon>
    </v-btn>
    <store-list
      v-if="showList"
      :stores="stores"
      @list-close="onListCloseClicked"
    />
    <map-container
      class="map-container"
      :storeMarkers="stores"
      @move="onMapMoved"
    />
  </div>
</template>

<script>
import Vue from "vue";
import MapContainer from "../components/MapContainer.vue";
import StoreList from "../components/StoreList.vue";
import { Api } from "../service/api";
export default Vue.extend({
    name: 'Home',
    components: {
        MapContainer,
        StoreList,
    },
    data() {
        return {
            showList: false,
            stores: [],
            loadedAll: false
        };
    },
    created() {
        Api.getAllStores()
        .then(stores => {
            this.stores = stores
        })
    },
    methods: {
        onListBtnClicked() {
            this.showList = true;
        },
        onListCloseClicked() {
            this.showList = false;
        },
        async onMapMoved(event) {
            if (event.zoom > 15) {
                const stores = await Api.getStoresByPosition(event.lat, event.lng, 1000)
                this.loadedAll = false
                this.stores = stores
            }
            else if (event.zoom <= 15 && !this.loadedAll) {
                const stores = await Api.getAllStores()
                this.loadedAll = true
                this.stores = stores
            }
        }
    },
  },
);
</script>

<style scoped>
.list-btn {
  position: absolute;
  top: 12vh;
  left: 5vh;
  z-index: 5;
}
.map-container {
  position: static;
}
</style>

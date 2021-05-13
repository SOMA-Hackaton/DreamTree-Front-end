<template>
    <naver-maps
        style="widht: 100%; height: 100vh"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @load="onLoad"
        @dragend="emitMoveEvent"
        @click="onClickedMap"
    >
        <store-infomation 
        class="store-info"
        v-if="showInfo"
        :store="selectedStore" />
        <naver-marker
            v-for="(store, index) in storeMarkers"
            :key="index"
            :store="store"
            :lat="store.latitude"
            :lng="store.longitude"
            @click="onMarkerClicked(store)"
            @load="onMarkerLoaded"
        />
    </naver-maps>
</template>

<script>
import Vue from 'vue';
import StoreInfomation from './StoreInformation.vue';

export default Vue.extend({
    name: 'MapContainer',
    components: {
        StoreInfomation,
    },
    props: {
        storeMarkers: Array,
    },
    data() {
        return {
            info: false,
            marker: null,
            count: 1,
            map: null,
            isCTT: false,
            mapOptions: {
                lat: 37.576227432762906,
                lng: 126.89254733575699,
                zoom: 15,
                zoomControl: false,
                mapTypeControl: false,
            },
            initLayers: [
                'BACKGROUND',
                'BACKGROUND_DETAIL',
                'POI_KOREAN',
                'TRANSIT',
                'ENGLISH',
                'CHINESE',
                'JAPANESE',
            ],
            selectedStore: null,
            showInfo: false,
        };
    },
    methods: {
        onLoad(vue) {
            this.map = vue;
        },
        onWindowLoad(that) {

        },
        onMarkerClicked(selected) {
            this.selectedStore = selected
            this.showInfo = true
        },
        onMarkerLoaded(vue) {

        },
        onClickListBtn(event) {
            this.showList = true;
        },
        emitMoveEvent(event) {
            this.$emit('move', {lat: event.coord._lat, lng: event.coord._lng});
        },
        onClickedMap() {
            if (this.showInfo) {
                this.showInfo = false
            }
        }
    },
    mounted() {},
});
</script>

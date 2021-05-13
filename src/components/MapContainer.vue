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
            :store="selectedStore"
        />
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
                lat: 37.5625533,
                lng: 126.9231889,
                zoom: 14,
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
            markerClustering: null,
        };
    },
    computed: {
        markers() {
            const markers = [];
            for (let i = 0; i < this.storeMarkers.length; i++) {
                markers.push(
                    new naver.maps.LatLng(
                        this.storeMarkers[i].latitude,
                        this.storeMarkers[i].longitude
                    )
                );
            }
            return markers;
        },
    },
    methods: {
        onLoad(vue) {
            this.map = vue;
        },
        onWindowLoad(that) {},
        onMarkerClicked(selected) {
            this.selectedStore = selected;
            this.showInfo = true;
        },
        onMarkerLoaded(vue) {
            const icon = setMarkerIcon(vue.$attrs.store.type);
            vue.marker.setIcon({
                content: [
                    `<img src=${icon} style="width: 38px; heigth: 38px;" >`,
                    `</img>`,
                ].join('')
            });
        },
        onClickListBtn(event) {
            this.showList = true;
        },
        emitMoveEvent(event) {
            if (this.map.getZoom() > 15)
                this.storeMarkers = []
            this.$emit('move', {
                lat: event.coord._lat,
                lng: event.coord._lng,
                zoom: this.map.getZoom(),
            });
        },
        onClickedMap() {
            if (this.showInfo) {
                this.showInfo = false;
            }
        },
    },
    mounted() {},
});

function setMarkerIcon(type) {
    switch (type) {
        case '제과점':
            return './bakery.svg';
        case '중식':
            return './chinese_food.svg';
        case '패스트푸드':
            return './fast_food.svg';
        case '일식':
            return './japanese_food.svg';
        case '한식':
            return './korean_food.svg';
        case '양식':
            return './western_food.svg';
        default:
            return './basic.svg';
    }
}
</script>
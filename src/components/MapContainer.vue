<template>
    <naver-maps
        style="widht: 100%; height: 100vh"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @load="onLoad"
        @dragend="emitMoveEvent"
    >
        <naver-info-window
            class="info-window"
            @load="onWindowLoad"
            :isOpen="info"
            :marker="marker"
        >
            <!-- 마커 클릭 시 컴포넌트 -->
            <div class="info-window-container">
                <h1>{{ hello }}</h1>
            </div>
        </naver-info-window>
        <naver-marker
            v-for="(store, index) in storeMarkers" :key="index"
            :store="store"
            :lat="store.latitude"
            :lng="store.longitude"
            @click="onMarkerClicked"
            @load="onMarkerLoaded"
        />
    </naver-maps>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'MapContainer',
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
                lat: 37.566213,
                lng: 126.901633,
                zoom: 15,
                zoomControl: false,
                mapTypeControl: true,
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
        };
    },
    computed: {
        hello() {
            return `Hello, World! × ${this.count}`;
        },
    },
    methods: {
        onLoad(vue) {
            this.map = vue;
        },
        onWindowLoad(that) {},
        onMarkerClicked(event) {
            this.info = !this.info;
        },
        onMarkerLoaded(vue) {
            this.marker = vue.marker;
        },
        onClickListBtn(event) {
            this.showList = true;
        },
        emitMoveEvent(event) {
            this.$emit('move')
        }
    },
    mounted() {},
});
</script>

<style scoped>
.info-window-container {
    padding: 10px;
    width: 300px;
    height: 100px;
}
</style>

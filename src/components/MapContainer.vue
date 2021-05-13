<template>
    <naver-maps
        style="widht: 100%; height: 100vh"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @load="onLoad"
    >
        <naver-info-window
            class="info-window"
            @load="onWindowLoad"
            :isOpen="info"
            :marker="marker"
        >
            <div class="info-window-container">
                <h1>{{ hello }}</h1>
            </div>
        </naver-info-window>
        <naver-marker
            :lat="37.566213"
            :lng="126.901633"
            @click="onMarkerClicked"
            @load="onMarkerLoaded"
        />
    </naver-maps>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'MapContainer',
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

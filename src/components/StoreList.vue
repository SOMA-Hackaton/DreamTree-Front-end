<template>
    <div class="store-list-container">
        <v-card class="mx-auto card-list" tile>
            <v-list dense>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="item.text"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-btn
                class="list-close-btn"
                color="rgb(255,255,255)"
                elevation="0"
                @click="onCloseBtnClicked"
                small
                plain
            >
                <v-icon color="rgb(0,0,0)"> mdi-window-close </v-icon>
            </v-btn>
        </v-card>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'StoreList',
    data() {
        return {
            selectedItem: 1,
            items: [
                /** 임시 리스트 */
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
        };
    },
    methods: {
        onCloseBtnClicked() {
            this.$emit('list-close')
        },
    },
});
</script>

<style scoped>
.store-list-container {
    z-index: 10;
    width: 25%;
    height: 100vh;
    position: absolute;
    background-color: aliceblue;
}

.card-list {
    position: relative;
    height: 100vh;
}

.list-close-btn {
    position: absolute;
    top: 1em;
    right: 1em;
    width: 1em;
}
</style>

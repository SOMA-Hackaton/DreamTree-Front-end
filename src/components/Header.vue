<template>
  <div>
    <v-app-bar color="indigo" absolute>
      <v-container class="py-0">
        <v-row align="center" justify="center">
          <v-col cols="4">
            <img
              src="https://user-images.githubusercontent.com/43667316/118102720-15061d80-b414-11eb-8b72-b8b01f56ffa8.png"
              alt="logo"
              style="object-fit: cover"
              width="200"
              align="center"
            />
          </v-col>
          <v-col cols="8" align="right">
            <v-btn
              text
              onclick="window.open('https://m.shinhancard.com/mob/MOBFM064N/MOBFM064R01.shc')"
              color="white"
              style="font-size: 16px"
              >잔액 확인
            </v-btn>
            <v-btn text dark min-width="0" onclick="window.open('./apk/apkQR.png','_blank')">
              <v-icon dark> mdi-android </v-icon>
            </v-btn>
            <v-btn text dark min-width="0" href="https://github.com/SOMA-Hackaton/DreamTree-Front-end" target="_blank">
              <v-icon medium>info</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
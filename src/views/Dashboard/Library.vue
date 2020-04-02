<template>
    <v-container>
        <v-row>
            <v-col v-for="item in items" v-bind:key="item.key" cols="12" md="6" lg="4">
                <v-card>
                    
                    <v-img
                        :src="item.img"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,1)"
                        height="200px">
                        <v-card-title>
                            {{item.name}}
                            <v-spacer></v-spacer>
                            <v-card-actions>
                                <v-btn icon dark>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>

                                <v-btn icon dark>
                                    <v-icon>mdi-bookmark</v-icon>
                                </v-btn>

                                <v-btn icon dark>
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'Library',
    
    data: () => ({
        items: [
            {
                name: 'Halo 5',
                img: 'https://www.wallpaperflare.com/static/427/408/963/halo-5-video-games-military-master-chief-wallpaper.jpg'
            },
            {
                name: 'Halo Wars 2',
                img: 'https://9c6177901f4388e3887b-66fdad557a241ac6538c4d24b420ed08.ssl.cf1.rackcdn.com/Battlescene-war-scene-for-key-art-of-Halo-Wars-2-web.jpg'
            },
            {
                name: 'Destiny',
                img: 'https://alonsoramirezcoverblog.files.wordpress.com/2019/08/https___blogs-images.forbes.com_erikkain_files_2017_12_destiny.jpg?w=816'
            },
            {
                name: 'Destiny 2',
                img: 'https://destinynewshub.com/wp-content/uploads/2017/12/destiny-2-gods-of-mars-cover-art.jpg'
            }
        ]
    })
};
</script>
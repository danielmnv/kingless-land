<template>
    <v-app>
        <v-navigation-drawer :mini-variant="mini" app :permanent="true" color="primary" dark>
            <v-layout column fill-height>
                <v-list dense>
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-title>iNeurozis v</v-list-item-title>

                        <v-btn icon @click.stop="mini = !mini">
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item v-for="item in items" :key="item.text" link class="py-3" @click="go(item.page)">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-spacer></v-spacer>

                <v-list dense>
                    <v-list-item link class="py-3" @click="changeTheme">
                        <v-list-item-icon>
                            <v-icon>mdi-invert-colors</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Theme</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-layout>
        </v-navigation-drawer>

        <v-content>
            <v-container class="fill-height">
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    props: {
        source: String
    },
    data: () => ({
        mini: null,
        drawer: true,
        items: [
            { icon: "mdi-rss", text: "Activity", page: "/dashboard" },
            { icon: "mdi-heart", text: "Favorites", page: "/dashboard/favorites" },
            { icon: "mdi-gamepad-variant", text: "Games", page: "/dashboard/games" },
            { icon: "mdi-cogs", text: "Settings", page: "/dashboard/settings" }
        ]
    }),
    methods: {
        go(pathRoute) {
            this.$router.push({ path: pathRoute });
        },

        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
};
</script>
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#043562',
                secondary: '#5c5841',
                accent: '#d29435',
                background: '#051211',
                foreground: '#616161',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            dark: {
                primary:'#252423',
                secondary:'#bf2b30',
                accent: '#06291c',
                background: '#051211',
                foreground: '#616161',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
        },
        
    }
});

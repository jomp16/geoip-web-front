<template>
    <b-navbar fixed-top type="is-dark" wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <p>geo.cgnat.net</p>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-dropdown :label="$t('navbar.language')">
                <b-navbar-item href="#" @click="changeLanguage('en-US')">
                    {{ $t('navbar.language_title.english_us') }}
                </b-navbar-item>
                <b-navbar-item href="#" @click="changeLanguage('pt-BR')">
                    {{ $t('navbar.language_title.portuguese_br') }}
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Navbar extends Vue {
        public changeLanguage(language: string) {
            this.$root.$i18n.locale = language;
        }
    }
</script>
<template>
    <b-navbar fixed-top type="is-black" wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <!--<b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>-->
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
<template>
    <section>
        <Navbar></Navbar>
        <div class="container">
            <GeoIpSearch></GeoIpSearch>
        </div>
    </section>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import GeoIpSearch from '@/components/geoip/GeoIpSearch.vue';
    import Navbar from '@/components/navbar/Navbar.vue';

    @Component({
        components: {
            GeoIpSearch,
            Navbar,
        },
    })
    export default class Home extends Vue {
    }
</script>

<style scoped lang="scss">
    .container {
        margin-top: 20px;
    }
</style>

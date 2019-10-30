<template>
    <section>
        <b-field horizontal :label="$t('geoip.domain_or_addresses')">
            <b-input type="textarea" v-model="domainOrIPAddresses"></b-input>
        </b-field>

        <b-field horizontal>
            <p class="control">
                <button class="button is-primary" @click="searchIp()">
                    {{ $t("geoip.search_domain_or_addresses") }}
                </button>
            </p>
        </b-field>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {GeoIpApiV1Service} from '@/services/api/v1/geoip/GeoIpApiV1Service';

@Component
export default class GeoIpSearch extends Vue {
    private domainOrIPAddresses: string = '';

    public searchIp() {
        const geoIpApiV1Service: GeoIpApiV1Service = new GeoIpApiV1Service();
        const domainOrIPAddressesSplit = this.domainOrIPAddresses.split('\n');

        /*geoIpApiV1Service.searchIp(domainOrIPAddressesSplit).then((value) => {

        });*/
    }
}
</script>
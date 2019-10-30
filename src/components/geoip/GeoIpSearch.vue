<template>
    <section>
        <b-field horizontal :label="$t('geoip.domain_or_addresses')">
            <b-input type="textarea" v-model="domainOrIPAddressesText"></b-input>
        </b-field>

        <b-field horizontal>
            <p class="control">
                <button class="button is-primary" @click="searchIp()">
                    {{ $t("geoip.search_domain_or_addresses") }}
                </button>
            </p>
        </b-field>
        <b-table :data="addresses" :columns="columns" striped bordered hoverable paginated v-if="addresses.length > 0"></b-table>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {GeoIpApiV1Service} from '@/services/api/v1/geoip/GeoIpApiV1Service';
    import {GeoIpV1SearchResponse} from '@/services/api/v1/geoip/objects/GeoIpV1SearchResponse';

    @Component
    export default class GeoIpSearch extends Vue {
        private domainOrIPAddressesText: string = '';
        private addresses: GeoIpV1SearchResponse[] = [];
        // noinspection JSUnusedLocalSymbols
        private columns: any[] = [
            {
                field: 'ip.ip',
                label: 'IP',
                searchable: false,
                sortable: true,
            },
            {
                field: 'ip.ptr',
                label: 'PTR',
                searchable: false,
                sortable: true,
            },
            {
                field: 'asn.name',
                label: 'ASN',
                searchable: false,
                sortable: true,
            }];

        public searchIp() {
            const geoIpApiV1Service: GeoIpApiV1Service = new GeoIpApiV1Service();
            const domainOrIPAddressesSplit = this.domainOrIPAddressesText.split('\n');

            geoIpApiV1Service.searchIp(domainOrIPAddressesSplit).then((value) => {
                this.addresses = value.data;
            });
        }
    }
</script>
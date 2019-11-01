<template>
    <section>
        <b-field horizontal :label="$t('geoip.domain_or_addresses')" type="is-dark">
            <b-input type="textarea" v-model="domainOrIPAddressesText"></b-input>
        </b-field>

        <b-field horizontal>
            <p class="control">
                <button class="button is-dark" @click="searchIp()">
                    {{ $t("geoip.search_domain_or_addresses") }}
                </button>
            </p>
        </b-field>
        <b-table :data="addresses" striped bordered hoverable paginated v-if="addresses.length > 0">
            <template slot-scope="props">
                <b-table-column :label="$t('geoip.table.ip')" width="250">
                    {{ props.row.ip.ip }}
                </b-table-column>

                <b-table-column :label="$t('geoip.table.ptr')" width="400">
                    <label v-if="props.row.ip.ptr !== undefined && props.row.ip.ptr !== null">
                        {{ props.row.ip.ptr }}
                    </label>
                    <label v-else>
                        {{ $t('geoip.error.no_ptr') }}
                    </label>
                </b-table-column>

                <b-table-column :label="$t('geoip.table.asn')" width="400">
                    <label v-if="props.row.asn !== undefined && props.row.asn !== null">
                        {{ props.row.asn.number }} - {{ props.row.asn.name }}
                    </label>
                    <label v-else>
                        {{ $t('geoip.error.no_asn') }}
                    </label>
                </b-table-column>

                <b-table-column :label="$t('geoip.table.city_state_country')" width="300">
                    <label v-if="props.row.city !== undefined && props.row.city !== null">
                        {{ props.row.city.name }} / {{ props.row.city.state }} / {{ props.row.city.country }}
                    </label>
                    <label v-else>
                        {{ $t('geoip.error.no_city') }}
                    </label>
                </b-table-column>
            </template>
        </b-table>
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

        public searchIp() {
            const geoIpApiV1Service: GeoIpApiV1Service = new GeoIpApiV1Service();
            const domainOrIPAddressesSplit = this.domainOrIPAddressesText.split('\n');

            geoIpApiV1Service.searchIp(domainOrIPAddressesSplit).then((value) => {
                this.addresses = value.data;
            });
        }
    }
</script>
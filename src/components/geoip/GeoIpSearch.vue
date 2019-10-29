<template>
    <section>
        <b-field horizontal label="Message">
            <b-input type="textarea"></b-input>
        </b-field>

        <b-field horizontal>
            <p class="control">
                <button class="button is-primary">
                    {{ $t("message") }}
                </button>
            </p>
        </b-field>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class GeoIpSearch extends Vue {
    }
</script>
import axios, {AxiosResponse} from 'axios';
import {GeoIpV1SearchResponse} from '@/services/api/v1/geoip/objects/GeoIpV1SearchResponse';
import {ApiV1Constants} from '@/services/api/v1/ApiV1Constants';

export class GeoIpApiV1Service {
    private url: string = `${ApiV1Constants.API_V1_URL}/geoip`;

    public searchIp(ips: string[]): Promise<AxiosResponse<GeoIpV1SearchResponse[]>> {
        return axios.post<GeoIpV1SearchResponse[]>(`${this.url}/search`, ips);
    }
}

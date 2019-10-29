export interface Ip {
    ip: string;
    ptr: string;
}

export interface City {
    name: string;
    state: string;
    country: string;
}

export interface Asn {
    number: string;
    name: string;
}

export interface GeoIpV1SearchResponse {
    ip: Ip;
    city: City;
    asn: Asn;
}

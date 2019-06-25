/// <reference types="geojson" />

declare module '@tmcw/togeojson' {
    export function kml(doc: Document): GeoJSON.FeatureCollection
    export function kmlGen(doc: Document): IterableIterator<GeoJSON.Feature>
    export function gpx(doc: Document): GeoJSON.FeatureCollection
    export function gpxGen(doc: Document): IterableIterator<GeoJSON.Feature>
}
/*eslint-env es_modules */
import * as React from "react";
import { loadBingApi, Microsoft } from "./BingMapsLoader";

interface IMapProps {
    mapOptions?: any;
}

export default class BingMap extends React.Component<IMapProps, any> {
  private mapRef = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    loadBingApi("Aug2Q3KaC6_DMA9-TKaljEYw3IkRIntiV4BcEzBz2OURVgkYSgFpNsHYkp6p5VlE").then(() => {
      this.initMap();
    });
  }

  public render() {
    return <div ref={this.mapRef} className="map" />;
  }

  private initMap() {
    const map = new Microsoft.Maps.Map(this.mapRef.current);
    if (this.props.mapOptions) {
      map.setOptions(this.props.mapOptions);
    }
    return map;
  }
}

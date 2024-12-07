import { HttpException, Injectable } from '@nestjs/common';
import { BoundingBoxDto } from 'src/osm/dto/boundingBox.dto';
import axios, { isAxiosError } from 'axios';

@Injectable()
export class OsmService {
  private readonly OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

  public async getRoads(boundingBoxDto: BoundingBoxDto) {
    console.log(boundingBoxDto);
    const query = `
    [out:json];
    way
      [highway]
      (${boundingBoxDto.x.latitude},${boundingBoxDto.x.longitude},${boundingBoxDto.y.latitude},${boundingBoxDto.y.longitude});
    out geom;
    `;
    return this.getOsmData(query);
  }

  public async getTrafficSignals(boundingBoxDto: BoundingBoxDto) {
    const query = `
    [out:json];
    node
      [highway=traffic_signals]
      (${boundingBoxDto.x.latitude},${boundingBoxDto.x.longitude},${boundingBoxDto.y.latitude},${boundingBoxDto.y.longitude});
    out;
    `;
    return this.getOsmData(query);
  }

  private async getOsmData(query: string) {
    try {
      return axios.get(`${this.OVERPASS_URL}?data=${query}`)
        .then((response) => response.data)
    } catch (err) {
      if (isAxiosError(err)) {
        throw new HttpException("Get OSM data error", err.response?.status || 500);
      }
    }
  }
}

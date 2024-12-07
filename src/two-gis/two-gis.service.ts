import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetLayersRequestDto } from 'src/two-gis/dto/getLayersRequest.dto';

@Injectable()
export class TwoGisService {
  public async getLayers(getLayersRequestDto: GetLayersRequestDto): Promise<any> {
    return axios.get(
      'https://tugc.2gis.com/1.0/layers/2gis',
      {
        params: getLayersRequestDto,
        headers: {
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'ru,en;q=0.9',
          'cache-control': 'no-cache',
          'origin': 'https://2gis.ru',
          'pragma': 'no-cache',
          'priority': 'u=1, i',
          'referer': 'https://2gis.ru/',
          'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "YaBrowser";v="24.10", "Yowser";v="2.5"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36',
        },
      },
    ).then(res => res.data);
  }
}

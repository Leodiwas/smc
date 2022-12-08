import { Injectable } from '@angular/core';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teams: Team[] = [
    {
      imgPath: '../../../../assets/images/mama.jpg',
      name: 'Baburam Neupane',
      job: 'Owner',
      fb: 'https://www.facebook.com/baburam.neupane.3720',
      tiktok:
        'https://www.tiktok.com/@baburam_neupane98?_t=8XZ7s3Qj7bN&_r=1&fbclid=IwAR1MV-PaWH9nsCsXDzhcnZsEx7UIqcSpQq14eOaLNk1BrUcn5OmWKrabp0E',
      gmail: 'mailto:baburamneupane98000@gmail.com',
    },
    {
      imgPath: '../../../../assets/images/dataram.jpg',
      name: 'Dataram Khatiwoda',
      job: 'Staff',
      fb: 'https://www.facebook.com/dataramkhatiwada9109',
      tiktok:
        'https://www.tiktok.com/@dataramkhatiwada?fbclid=IwAR2RkLDwzxwN1tmOGmRzzZ6VxSqfpf5fyaBodG48AbjfR4plDKDRVFeLD6w',
      gmail: 'mailto:dataramkhatiwada9109@gmail.com',
    },
    {
      imgPath: '../../../../assets/images/dip.png',
      name: 'Dipshika Dhakal',
      job: 'Staff',
      fb: 'https://www.facebook.com/dipshika.dhakal.165',
      tiktok:
        'https://www.tiktok.com/search?q=dipshika.dhakal1&t=1670509269586',
      gmail: 'mailto:dhakaldipshika@gmail.com',
    },
    {
      imgPath: '../../../../assets/images/nanii.png',
      name: 'Diya Tiwari',
      job: 'Staff',
      fb: 'https://www.facebook.com/deeyatiwari4',
      tiktok:
        'https://www.tiktok.com/@baburam_neupane98?_t=8XZ7s3Qj7bN&_r=1&fbclid=IwAR1MV-PaWH9nsCsXDzhcnZsEx7UIqcSpQq14eOaLNk1BrUcn5OmWKrabp0E',
      gmail: 'mailto:baburamneupane98000@gmail.com',
    },
  ];

  constructor() {}

  getTeams() {
    return this.teams.slice();
  }
}

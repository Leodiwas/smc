import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  images = [
    {
      img: '../../../../assets/images/ime.png',
    },
    {
      img: '../../../../assets/images/ime_pay.png',
    },
    {
      img: '../../../../assets/images/city.png',
    },
    {
      img: '../../../../assets/images/wu.png',
    },
    {
      img: '../../../../assets/images/mg.png',
    },
    {
      img: '../../../../assets/images/himal.png',
    },
    {
      img: '../../../../assets/images/prabhu.png',
    },
    {
      img: '../../../../assets/images/esewa.png',
    },
    {
      img: '../../../../assets/images/esewa_mt.jpg',
    },
    {
      img: '../../../../assets/images/gme.png',
    },
    {
      img: '../../../../assets/images/samsara.png',
    },
    {
      img: '../../../../assets/images/nepal.png',
    },
    {
      img: '../../../../assets/images/ipay.jpg',
    },
    {
      img: '../../../../assets/images/rirr.png',
    },
    {
      img: '../../../../assets/images/sanima.png',
    },
    {
      img: '../../../../assets/images/remit2nepal.png',
    },
    {
      img: '../../../../assets/images/modernRemit.jpg',
    },
    {
      img: '../../../../assets/images/sewaRemit.png',
    },
  ];
  loader: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.loader = true), 500);
  }
}

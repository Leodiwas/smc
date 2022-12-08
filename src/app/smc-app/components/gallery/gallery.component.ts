import { Component, OnInit } from '@angular/core';

interface GalleryImages {
  image: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  pics: GalleryImages[] = [
    {
      image: '../../../../assets/images/wp3228152.jpg',
    },
    {
      image: '../../../../assets/images/tryy.jpg',
    },
  ];
  showImgBox: boolean = false;
  showOverlay: boolean = false;
  img: string = '';
  loader: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.loader = true), 500);
  }

  onGalleryBox(img: any) {
    this.showImgBox = true;
    this.showOverlay = true;
    return (this.img = img);
  }

  onBoxClose() {
    this.showImgBox = false;
    this.showOverlay = false;
  }
}

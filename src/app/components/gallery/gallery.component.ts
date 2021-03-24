import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  constructor() { }


  ngOnInit() {

    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 750
    });
  }

}



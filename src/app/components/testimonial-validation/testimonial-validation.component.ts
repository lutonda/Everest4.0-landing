import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
@Component({
  selector: 'app-testimonial-validation',
  templateUrl: './testimonial-validation.component.html',
  styleUrls: ['./testimonial-validation.component.css']
})
export class TestimonialValidationComponent implements OnInit {

  public enrollment;
  constructor(public service: AppService) { }

  ngOnInit(): void {

    this.service.getOne('7fa254f6-f29b-413b-93e8-a11c698ce4d4', 'courses/enrollments').subscribe(enrollment => {
      this.enrollment = enrollment

      let node = document.getElementById('main');
      setTimeout(() => {
        htmlToImage.toPng(node)
          .then(function (dataUrl) {
            var img = document.getElementById('main-test');
            img.setAttribute('src', dataUrl);
            document.getElementById('main').remove()
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
      }, 2000);
    })
  }

}

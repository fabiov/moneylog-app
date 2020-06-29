import { Component, OnInit } from '@angular/core';
import { movements } from '../movements';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movement-details',
  templateUrl: './movement-details.component.html',
  styleUrls: ['./movement-details.component.css']
})
export class MovementDetailsComponent implements OnInit {
  movement;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movement = movements.find(
        item => parseInt(params.get('productId')) === item.id
      );
      console.log(this.movement);
    });
  }

}

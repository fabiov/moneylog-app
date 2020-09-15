import {Component, OnInit} from '@angular/core';
import {MovementService} from '../../shared/services/movement.service';
import {Movement} from '../../models/movement.model';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  private movementService: MovementService;
  loading: boolean;
  movements: Movement[];

  constructor(movementService: MovementService) {
    this.movementService = movementService;
    this.loading = true;

    this.movementService.fetchList().subscribe(data => {
      this.movements = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }
}

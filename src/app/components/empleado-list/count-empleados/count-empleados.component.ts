import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  radioButonSeleccionado = 'Todos';
  @Input() todos: number = 0;
  @Input() femenino: number = 0;
  @Input() masculino: number = 0;
  @Output() eventRadioButtonEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  chageStateRadioButon() {
    this.eventRadioButtonEmit.emit(this.radioButonSeleccionado);

  }

}

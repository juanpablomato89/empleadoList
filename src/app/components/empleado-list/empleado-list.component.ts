import { Component, OnInit } from '@angular/core';
import { empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25000 },
    { legajo: 2, nombre: 'Marcos', apellido: 'Gozalez', sexo: 'Masculino', salario: 65000 },
    { legajo: 3, nombre: 'Marta', apellido: 'Garcia', sexo: 'Femenino', salario: 75000 },
    { legajo: 4, nombre: 'Ignacio', apellido: 'Cortes', sexo: 'Masculino', salario: 55000 },
    { legajo: 5, nombre: 'Maria', apellido: 'Navarro', sexo: 'Femenino', salario: 80000 },
  ]

  radioButonSeleccionado = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  radioButonSeleccionadoChange(radioSeleccionado: string) {
    this.radioButonSeleccionado = radioSeleccionado;
  }

}

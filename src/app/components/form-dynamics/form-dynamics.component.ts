import { Component, OnInit, OnChanges, SimpleChanges , Input, Output, EventEmitter } from '@angular/core';
import { ItemDTO } from '../../models/item.model';

@Component({
  selector: 'app-form-dynamics',
  templateUrl: './form-dynamics.component.html',
  styleUrls: ['./form-dynamics.component.css']
})
export class FormDynamicsComponent implements OnInit, OnChanges {

  @Input() inputs: ItemDTO[]
  @Output() onCancelEvent = new EventEmitter<boolean>(false)
  @Output() onSaveEvent = new EventEmitter<any>(false)

  constructor() {}
 
  protected formData: { [key: string]: any } = {};

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inputs']) this.formData = {}
  }

  ngOnInit(): void {
    // Inicializa formData con las claves de inputs
    this.inputs?.filter(filter => filter.type !== 'file').forEach(field => {
      this.formData[field.name] =  null;
    })
  }

  protected GetColumns(field: ItemDTO): string {
    return `col-lg-${!!field?.columns ? field?.columns : 3}`
  }

  protected onClickCancel(): void {
    this.onCancelEvent.emit(true)
  }
  
  protected onClickSave(): void {
    this.onSaveEvent.emit(this.formData)
  }
  
}

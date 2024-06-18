import { ItemDTO } from './item.model';
export class BusDTO {
    component: string
    componentName: string
    componentDynamic: boolean
    componentData: any
    compoenentInputs: ItemDTO[]
}
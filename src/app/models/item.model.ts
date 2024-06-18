export class ItemDTO {
    name: string
    type?: string
    label?: string
    options?: any[]
    url?: string
    text?: string
    columns?: number
    valor?: any

    constructor() {
        this.name = ''
        this.type = ''
        this.label = ''
        this.options = []
        this.url = ''
        this.text = ''
        this.columns = 12
        this.valor = ''
    }
}
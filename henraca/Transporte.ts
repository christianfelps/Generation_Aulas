export class Transporte{
    private _capacidade: number;

	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}

    /**
     * Getter capacidade
     * @return {number}
     */
	public get capacidade(): number {
		return this._capacidade;
	}

    /**
     * Setter capacidade
     * @param {number} value
     */
	public set capacidade(value: number) {
		this._capacidade = value;
	}
    public visualizar(): void{
        console.log('**************************************');
        console.log("Meio de transporte")
        console.log("Capacidade: " + this._capacidade)

    }


}
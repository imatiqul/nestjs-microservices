import { IsNotEmpty } from 'class-validator';

export class CreateCatalogCommand {
    @IsNotEmpty()
    public catalogName: string;

    @IsNotEmpty()
    public price: number;

    constructor(catalogName: string,
        price: number
    ) { 
        this.catalogName = catalogName;
        this.price = price;
    }
}
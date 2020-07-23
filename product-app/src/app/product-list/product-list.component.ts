import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/product'
import { ProductService } from 'src/app/product.service'
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    productList: Product[] = []
    filterData: string = ''
    constructor(private service: ProductService) {}

    ngOnInit(): void {
        this.getAll()
    }

    onRatingClicked(message: string): void {
        alert(message)
    }

    getAll(): void {
        this.service.getAllProduct().subscribe((productList) => {
            return (this.productList = productList)
        })
    }
}

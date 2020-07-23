import { Injectable } from '@angular/core'
import { Product } from 'src/app/models/product'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getSampleProduct(): Product[] {
        const productList: Product[] = []
        const p1 = new Product(
            'https://www.thaimobilecenter.com/images/products/iphone-11-pro-max-512gb-b.jpg',
            '001',
            'iPhone 11 Pro Max',
            52900.0,
            true,
            1
        )
        const p2 = new Product(
            'https://www.thaimobilecenter.com/images/products/samsung-galaxy-s20-ultra-b.jpg',
            '002',
            'Samsung Galaxy S20 Ultra 5G',
            36900.5,
            true,
            2.5
        )
        const p3 = new Product(
            'https://www.thaimobilecenter.com/images/products/OnePlus-7-Pro-12GB-256GB-B.jpg',
            '003',
            'OnePlus 7 Pro',
            19999.75,
            true,
            4.5
        )
        productList.push(p1, p2, p3)
        return productList
    }

    getAllProduct(): Observable<Product[]> {
        // var apiUrl = 'http://165.22.255.58:3000/products'
        // return this.http.get<Product[]>(apiUrl)
        return of(this.getSampleProduct())
    }

    getProductById(code: string): Observable<Product> {
        return of(this.getSampleProduct().filter((p) => p.code === code)[0])
    }
}

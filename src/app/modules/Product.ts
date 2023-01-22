export class Product {
    id: number;
    title: string;
    description : string;
    price: number;
    rating: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];


    constructor(
        id: number,
        title: string,
        price: number,
        rating: number,
        category: string,
        images: string[],
        description : string,
        brand: string,
        thumbnail: string
    ) {
        this.id = id
        this.title = title
        this.price = price
        this.category = category
        this.images = images
        this.description = description
        this.rating = rating
        this.brand = brand
        this.thumbnail = thumbnail
    }


}

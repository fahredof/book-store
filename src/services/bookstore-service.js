export default class BookstoreService {
    data = [
        {
            id: 1,
            title: "POISON IN THE SYSTEM",
            author: "DAVID HIGHSMITH",
            price: 161.28,
            coverImage: "https://cdn.shopify.com/s/files/1/0880/2454/products/TEST_1000x.png?v=1581105509"
        },
        {
            id: 2,
            title: "MAKING BEING HERE ENOUGH",
            author: "RONI HORN",
            price: 40.32,
            coverImage: "https://cdn.shopify.com/s/files/1/0880/2454/products/Roni_Horn_-_1_3_657x.jpg?v=1549689748"
        },
        {
            id: 3,
            title: "PICTORIAL WEAVINGS",
            author: "ANNI ALBERS",
            price: 250.88,
            coverImage: "https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2290-2_1000x.jpg?v=1578514329"
        },
        {
            id: 4,
            title: "ARCHITECTURE",
            author: "WOLFGANG PEHNT",
            price: 43.01,
            coverImage: "https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2929_1000x.jpg?v=1580430010"
        },
        {
            id: 5,
            title: "THE JACOB'S LADDER",
            author: "DENISE LEVERTOV",
            price: 40.32,
            coverImage: "https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_5658_3200x_18ffe4dc-f87e-4a4f-8323-234e3291310b_1000x.jpg?v=1580435128"
        },
        {
            id: 6,
            title: "ALPHABET 1964",
            author: "JAMES MORAN",
            price: 58.24,
            coverImage: "https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2944_1000x.jpg?v=1580502225"
        }
    ];

    getBooks = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve(this.data)
                reject(new Error("Something bad happened"))
            }, 2000)
        })
    }
}
export interface ProductItem {
    name: string;
    color: string;
    type?: string; // Crocs specific
    fit?: string; // Birkenstock specific
    condition: string;
    img: string;
    price: number;
    category: string;
    description: string;
}

export const CROCS_ITEMS: ProductItem[] = [
    {
        name: "Classic Clog",
        color: "Black",
        type: "Unisex",
        condition: "New / Tag",
        img: "/1crocs.jpeg",
        price: 49.99,
        category: "Classic Clog",
        description:
            "The original Classic Clog. Lightweight, water-friendly, and perfect for any occasion.",
    },
    {
        name: "Classic Clog",
        color: "White",
        type: "Unisex",
        condition: "New / Tag",
        img: "/4crocs.jpeg",
        price: 49.99,
        category: "Classic Clog",
        description:
            "Fresh white Classic Clogs. The ultimate canvas for your Jibbitz™ charms.",
    },
    {
        name: "LiteRide 360 Clog",
        color: "Navy / Pepper",
        type: "Unisex",
        condition: "New / Boxed",
        img: "/2crocs.jpeg",
        price: 64.99,
        category: "LiteRide Clog",
        description:
            "Innovative comfort with LiteRide™ foam technology. softness and modern athletic style.",
    },
    {
        name: "Crocband Clog",
        color: "Charcoal / Ocean",
        type: "Unisex",
        condition: "New / Tag",
        img: "/3crocs.jpeg",
        price: 54.99,
        category: "Crocband Clog",
        description:
            "Vintage sneaker style meets Crocs comfort. Sporty midsole racing stripe for a retro look.",
    },
    {
        name: "Baya Clog",
        color: "Pepper",
        type: "Unisex",
        condition: "New / Tag",
        img: "/5crocs.jpeg",
        price: 49.99,
        category: "Baya Clog",
        description:
            "Designed with advanced ventilation and breathable comfort. The Baya keeps you cool.",
    },
    {
        name: "Classic Slide",
        color: "Bone",
        type: "Unisex",
        condition: "New / Tag",
        img: "/1crocs.jpeg",
        price: 29.99,
        category: "Classic Slide",
        description:
            "All the comfort of the Classic Clog, now in a slide. Easy on, easy off.",
    },
];

export const BIRKEN_ITEMS: ProductItem[] = [
    {
        name: "Boston Suede",
        color: "Taupe",
        fit: "Regular fit",
        condition: "New / Boxed",
        img: "/birkens1.jpg",
        price: 159.99,
        category: "Boston",
        description:
            "Iconic closed-toe Boston in soft taupe suede. The ultimate everyday comfort clog.",
    },
    {
        name: "Arizona Suede",
        color: "Soft Beige",
        fit: "Regular fit",
        condition: "Lightly used",
        img: "/birkens2.jpg",
        price: 129.99,
        category: "Arizona",
        description:
            "The classic two-strap Arizona in suede. Timeless, comfortable, and essential.",
    },
    {
        name: "Arizona EVA",
        color: "Triple Black",
        fit: "Narrow fit",
        condition: "New / No box",
        img: "/birkens3.jpg",
        price: 49.99,
        category: "Arizona",
        description:
            "Water-friendly Arizona EVA. Perfect for the beach, gym, or backyard.",
    },
    {
        name: "Boston Leather",
        color: "Mocha",
        fit: "Regular fit",
        condition: "Pre-loved",
        img: "/birkens4.jpg",
        price: 139.99,
        category: "Boston",
        description:
            "Smooth leather Boston in rich mocha. Sophisticated enough for work, comfortable enough for home.",
    },
    {
        name: "Gizeh Birko-Flor",
        color: "Pearl White",
        fit: "Regular fit",
        condition: "New / Tag",
        img: "/birkens2.jpg",
        price: 99.99,
        category: "Gizeh",
        description:
            "The elegant thong sandal. Combines optimum hold with a minimalist, fashionable design.",
    },
    {
        name: "Madrid Big Buckle",
        color: "Cognac",
        fit: "Narrow fit",
        condition: "New / Boxed",
        img: "/birkens1.jpg",
        price: 119.99,
        category: "Madrid",
        description:
            "The oldest member of the model family. A purist design updated with a large, elegant buckle.",
    },
    {
        name: "Mayari Oiled Leather",
        color: "Habana",
        fit: "Regular fit",
        condition: "New / Tag",
        img: "/birkens3.jpg",
        price: 124.99,
        category: "Mayari",
        description:
            "An elegant cross-strap sandal with a toe loop. Distinctive style and exceptional comfort.",
    },
];


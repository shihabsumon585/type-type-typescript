// Utility Types

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

// type ProductSummary = {
//     id: number;
//     name: string;
//     price: string;
// }

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStockAndColor = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>

const product: ProductWithColor = {
    id: 222,
    name: "Mouse",
    price: "20",
    stock: 100,
    color: "black"
}

type OptionProduct = Partial<Product>;
type ProductReadOnly = Readonly<Product>

const emtyObj: Record<string, unknown> = {};
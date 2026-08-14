import { products } from "@/data/products";
import AddToCart from "@/components/AddToCart";
import { CartProvider } from "@/context/cart";

type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return (
      <main className="mx-auto max-w-content px-6 py-12">
        <h1 className="font-serif text-2xl">Product not found</h1>
      </main>
    );
  }

  return (
    <CartProvider>
      <main className="mx-auto max-w-content px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="h-72 w-full bg-slate-200 flex items-center justify-center text-ink-muted">Image</div>
          </div>
          <div>
            <h1 className="font-serif text-2xl">{product.name}</h1>
            <p className="mt-2 text-sm text-ink-soft">{product.vendor.name} — {product.vendor.location}</p>
            <p className="mt-4 text-ink-muted">{product.description}</p>
            <p className="mt-4 font-medium">KES {product.priceKES.toLocaleString()}</p>
            <p className="mt-2 text-sm text-ink-muted">Category: {product.category}</p>

            {/* AddToCart is a client component that uses the Cart context */}
            <div className="mt-6">
              {/* hydrate client add-to-cart */}
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </main>
    </CartProvider>
  );
}

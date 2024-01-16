import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffee Mug - card",
  img: "./coffee-mug.png",
};

export default function ShoppingPage() {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={product.title} />
          <ProductButtons/>
        </ProductCard>

        {/* <ProductCard product={product}>
          <ProductCard.image />
          <ProductCard.title title={'Caffe de mocca'} />
          <ProductCard.buttons/>
        </ProductCard> */}
      </div>
    </div>
  );
}

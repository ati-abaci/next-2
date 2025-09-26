export default function ProductPage({ params }) {
  const { id } = params;

  const product = {
    id,
    name: `Your product is : ${id}`,
    description: "Details about this product.",
  };

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </main>
  );
}

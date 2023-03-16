import Head from "next/head";

const ProductExample = () => {
  
  return (
    <div>Product Name
      <button
      class="snipcart-add-item"
      data-item-id="test_snip-8eac9f4a-c3f9-4382-9b34-de9a1efde401"
      data-item-name="IM product- Test"
      data-item-version="v1"
      data-item-price="25.99"
      data-item-image="https://asimstudioart.philosofiq.com/wp-content/uploads/2023/02/prod_image-test-450x450.jpg"
      data-item-url="https://philosofiq.com/product-example"
    >
      Add to Cart
    </button>
    </div>
  )
}

export default ProductExample;
import api from "api";
import { useEffect, useState } from "react";
import TBody from "./TBody";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // Await results of reading stream as JSON
      const productData = await api.index();
      setProducts(() => productData);
    })();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th className="text-left">Name</th>
          <th className="text-left">Price</th>
        </tr>
      </thead>
      <TBody products={products} />
    </table>
  );
};

export default ProductTable;

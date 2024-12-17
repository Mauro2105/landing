import React from 'react';
import { Product } from '@/types/Products';
import Swal from 'sweetalert2';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const imageSrc = `/img/${product.image}`;

    const showDetails = () => {
        Swal.fire({
            title: product.name,
            text: `Precio: $ ${product.price}`,
            imageUrl: imageSrc,
            imageWidth: 400,
            imageAlt: `${product.name} Poster`,
            confirmButtonText: 'Close'
        });
    };

    return (
        <div className="product-card" onClick={showDetails}>
            <img src={imageSrc} alt={product.name} className='product-image' />
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
        </div>
    )
};

export default ProductCard;
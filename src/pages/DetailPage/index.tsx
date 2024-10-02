import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import styles from './DetailPage.module.scss';
import React, { useEffect } from 'react';
import { fetchProduct } from '../../store/products/product.slice';
import { addToCart } from '../../store/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';




const DetailPage = () => {
  
  const { id } = useParams();
  const productId = Number(id);
  const dispatch = useAppDispatch();

  const {product, isLoading} = useAppSelector((state) => state.product);
  const { products } = useAppSelector((state)=>state.cart );
  const productMatching = products.some((el) => el.id === product.id );

  
  useEffect(() => {
     dispatch(fetchProduct(productId));
  }, [productId])

  const addItemToCart = () => {
    dispatch(addToCart(product));
  }

  
  return (
    <div className='page'>
      {isLoading ? (<Loader />) : 
      
        <div className={styles.card_wrapper}>
          <div className={styles.card_img}>
            <img
              src={product.image} alt="product Card"
            />
          </div>

          <div className={styles.card_description}>
            <h3>{product.category}</h3>
            <h1>{product.title}</h1>

            <h4>$ {product.price}</h4>
            <p>{product.description}</p>
          </div>

          <button
            disabled={productMatching}
            onClick={() => !productMatching && addItemToCart()}
          >
            {productMatching ? "장바구니에 이미 있어요" : "장바구니에 담기"}
          </button>
          <Link to="/cart">장바구니</Link>
        </div>
      }

    </div >
  )
}

export default DetailPage
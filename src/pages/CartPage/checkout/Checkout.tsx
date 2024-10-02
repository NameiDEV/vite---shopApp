import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import styles from './Checkout.module.scss';
import { getTotalPrice, postOrder } from '../../../store/cart/cart.slice';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Checkout = () => {

    const cart = useAppSelector( state=> state.cart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cart])
    
    const { isAuth } = useAuth();

    const sendOrder= () => {
        dispatch(postOrder(cart));
    };

    return (
        <div className={styles.checkout}>
           <div>
                <p>
                    {" "}
                    <span>Total : </span> $ {cart.totalPrice.toFixed(2)}
                </p>

                { isAuth ? 
                <button
                    className={styles.checkout_button}
                    onClick={() => sendOrder()}
                >
                    계산
                </button>
                 : 
                <Link className={styles.checkout_button} to="/login">
                 Login
                </Link>
                }
           </div>
        </div>
    )
}

export default Checkout
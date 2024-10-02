import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import { getAuth, signOut } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { removeUser } from '../../../store/user/user.slice';
import { removeId } from '../../../store/cart/cart.slice';
import { useAuth } from '../../../hooks/useAuth';
import NavCartBlock from './nav-cart-block/NavCartBlock';
import { FiLogIn, FiShoppingCart, FiUser } from 'react-icons/fi';
import app from '../../../firebase';
import { GoSignOut } from 'react-icons/go';


const Nav = () => {
    const auth = getAuth(app);
    const {isAuth} = useAuth();
    const dispatch = useAppDispatch();
    const {products} = useAppSelector((state) => state.cart )
    const handleLogout = () => {
        signOut(auth)
                    .then(() => {
                        dispatch(removeUser());
                        dispatch(removeId());
                    }) .catch ((e) => {
                        console.log("error", e);
                    })
    }

    return (
        <nav className={styles.nav}>
           <ul>
             <li>
                <div className={styles.counter}>
                    <Link to={"/cart"}>
                    {" "}
                    <FiShoppingCart />
                    </Link>
                    {products.length > 0 && <b>{products.length}</b>}
                        {products.length > 0 &&
                            <div className={styles.nav_hover_cart}>
                                <NavCartBlock />
                            </div>}
                </div>
             </li>
             <li>
                <div className={styles.counter}>
                    <Link to={"/order"}>
                    {" "}
                    <FiUser title="주문" />
                    </Link>
                </div>
             </li>
             <li>
                {isAuth ? <GoSignOut
                    className={styles.nav_sign_out}
                    title="로그아웃"
                    onClick={handleLogout}
                    /> : <Link to={"/login"}>
                        {" "}
                        <FiLogIn title="로그인" />
                        </Link>}
                             
             </li>
           </ul>
        </nav>
    )
}

export default Nav
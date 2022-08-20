import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav className='header-nav'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/products'>Products</CustomLink>
                <CustomLink to='/orders'>Orders</CustomLink>
                <CustomLink to='/register'>Register</CustomLink>
                {
                    user &&
                    <CustomLink to='/admin'>Admin</CustomLink>
                }
                <span>{user?.uid && user.displayName}</span>
                {
                    user?.uid ?
                        <button onClick={() => signOut(auth)}>Sign out</button>
                        :
                        <CustomLink to='/login'>Login</CustomLink>
                }
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import FakeData from '../FakeData/FakeData';
import PlaceDetailsInfo from '../PlaceDetailsInfo/PlaceDetailsInfo';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './PlaceDetails.css'

const PlaceDetails = (props) => {
    const [cart, setCart] = useState([]);
    const history = useHistory();

    const removePlace = (itemId) => {
        const newCart = cart.filter(pd => pd.id !== itemId)
        setCart(newCart);
        removeFromDatabaseCart(itemId);

    }

    const handlePreBtn = () => {
        history.push('/home')
    }

    useEffect(() => {
        //cart
        const saveCart = getDatabaseCart();
        const itemId = Object.keys(saveCart)

        const cartItems = itemId.map(id => {
            const item = FakeData.find(pd => pd.id === id);
            return item;
        })
        setCart(cartItems);
    }, [])
    return (
        <>
            <h1 style={{ marginTop: '85px', color: 'red' }}>Best selling :</h1>  <hr />
            {
                cart.map(pd => <PlaceDetailsInfo
                    removePlace={removePlace}
                    key={pd.id}
                    item={pd} > </PlaceDetailsInfo>)
            }

            <div className="back-pre-page-btn">
                <Button onClick={() => handlePreBtn()}> back home page </Button>
            </div>

        </>
    );
};

export default PlaceDetails;
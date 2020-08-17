import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngradients = Object.keys(props.ingredients)
         .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log(igKey + i)

                return <BurgerIngredient key={igKey + i} type={igKey} />

            });
        })
        .reduce((arr,el)=> {
            return arr.concat(el)
        },[]);
    if(transformedIngradients.length === 0){
        transformedIngradients = <p>Please start adding the ingredients!</p>
    }


    return (

        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngradients}
            <BurgerIngredient type="bread-bottom" />
        </div>

    );
};

export default burger;
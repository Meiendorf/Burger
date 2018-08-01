import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './BurgerIngredient.css'

class BurgerIngredient extends Component{

    render(){
        let classes = ['bread-bottom', 'bread-top','meat',
            'cheese', 'bacon', 'salad'];
        let ingredient = null;
        if(classes.includes(this.props.type)){
            if(this.props.type == 'bread-top'){
                ingredient = (
                    <div className="bread-top">
                        <div className="seeds-1"></div>
                        <div className="seeds-2"></div>
                    </div>
                );
            }
            else{
                ingredient = <div className={this.props.type}>.</div>;
            }
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngredient;
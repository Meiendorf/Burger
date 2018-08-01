import React, {Component} from 'react'

import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient'

class BurgerBuilder extends Component{



    render(){
        return(
            <div className="burger-builder">
                <div>
                    Burger
                    <BurgerIngredient type="cheese" />
                </div>
                <div>
                    Burger controls
                </div>
            </div>
        );
    }
}

export default BurgerBuilder;
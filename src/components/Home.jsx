import React from 'react'
import { useContext } from 'react';
import { contentCreate } from '../Context/ContectCreate'
import './home.scss';


const Home = () => {

    const values = useContext(contentCreate);
    console.log(values.state.product);


    const _hanldIncrement = () => {
        values.dispatch({
            type: 'INCREMENT'
        })
    }
    const _hanldDecrement = () => {
        values.dispatch({
            type: 'DECREMENT'
        })
    }
    return (
        <div className='home'>


            <div className='counter'>
                <button onClick={_hanldIncrement}>+</button>
                <span className='span'>{values.state.count}</span>
                <button onClick={_hanldDecrement}>-</button>
                <div className='darkmode'>
                    <span>on</span>
                    <span>off</span>
                    <div
                        style={{ left: values.state.darkmode ? 0 : '' }}
                        className='btn'
                        onClick={() => values.dispatch({ type: 'TOGGLE' })}
                    ></div>
                </div>
            </div>

            <div className='products'>

                {
                    values.state.product.map((value) => {
                        return <div className="prodcustitem" key={value.id}>
                            <div className='product-img'>
                                <img src={value.image} alt="" />
                            </div>
                            <div className='product-context'>
                                <h1 className='title'>{value.title}</h1>
                                <span className='price'>{value.price}</span>
                                <p className='category'>{value.category}</p>
                                <p className='description'> {value.description} </p>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Home
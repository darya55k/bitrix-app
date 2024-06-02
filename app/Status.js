import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';



function Status() {
    return (
        <div className="content">
            <div className="form__container">

                <div className="form">
                    <h1 className='form__title'>Мои заявки</h1>

                    <div className='cards'>
                        <div className='card__item card__item-red'>
                            <div className='card__content'>
                                <div className='card__text'>
                                    <p className='card__number'>Заявка №1111111</p>
                                    <p className='card__data'>Заявка создана: 30.05.2024 в 12:00</p>

                                </div>
                                <div className='card__status card__status-red'>В ожидании</div>
                            </div>
                        </div>
                        <div className='card__item card__item-green'>
                            <div className='card__content'>
                                <div className='card__text'>
                                    <p className='card__number'>Заявка №1111111</p>
                                    <p className='card__data'>Заявка создана: 30.05.2024 в 12:00</p>

                                </div>
                                <div className='card__status card__status-green'>Выполнена</div>
                            </div>
                        </div>
                        <div className='card__item card__item-blue'>
                            <div className='card__content'>
                                <div className='card__text'>
                                    <p className='card__number'>Заявка №1111111</p>
                                    <p className='card__data'>Заявка создана: 30.05.2024 в 12:00</p>

                                </div>
                                <div className='card__status card__status-blue'>На рассмотрении</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Status;
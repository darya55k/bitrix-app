import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import Status from './Status';
import { Routes, Route, Link, useRouteMatch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Redirect } from 'react-router-dom'


const Content = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [lang, setLang] = useState('');
    const [predmObl, setPredmObl] = useState('');
    const [keyWord, setKeyWord] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && email && lang && predmObl && keyWord) {
            // Обработка отправки формы
            console.log('Отправлено: ', firstName);
            navigate('/status');
        }
    };




    return (
        <div className="content">
            <div className="form__container">

                <div className="form">
                    <h1 className='form__title'>Заполните форму заявления</h1>
                    <form onSubmit={handleSubmit} className='form__content'>

                        <label className='form__label' for="name">ФИО*</label>
                        <input className='form__input' required type="text" id="name" name="student_name" value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />

                        <div className="form__radio">
                            <label className='form__label'>Ваша принадлежность к ВАВТ:</label>
                            <div className='form__input form__input-radio'>
                                <input type="radio" id="under_16" value="under_16" name="user_age" />
                                <label for="under_16" className="light">Научный сотрудник</label>
                            </div>
                            <div className='form__input form__input-radio'>
                                <input type="radio" id="over_16" value="over_16" name="user_age" />
                                <label for="over_16" className="light">Преподаватель</label>
                            </div>
                            <div className='form__input form__input-radio'>
                                <input type="radio" id="over_16" value="over_16" name="user_age" />
                                <label for="over_16" className="light">Студент бакалавриата</label>
                            </div>
                            <div className='form__input form__input-radio'>
                                <input type="radio" id="over_16" value="over_16" name="user_age" />
                                <label for="over_16" className="light">Студент магистратуры</label>
                            </div>
                            <div className='form__input form__input-radio'>
                                <input type="radio" id="over_16" value="over_16" name="user_age" />
                                <label for="over_16" className="light">Аспирант</label>
                            </div>
                        </div>
                        <label className='form__label' for="phone">Телефон</label>
                        <input className='form__input' type="phone" id="phone" name="student_phone"></input>
                        <label className='form__label' for="mail">Почта*</label>
                        <input className='form__input' required type="email" id="mail" name="student_email" value={email}
                            onChange={(e) => setEmail(e.target.value)}></input>
                        <label className='form__label' for="lang">Язык статьи*</label>
                        <input className='form__input' required type="text" id="lang" name="student_lang" value={lang}
                            onChange={(e) => setLang(e.target.value)}></input>

                        <label className='form__label' for="lang">Предметные области статьи (1 - 3)*</label>
                        {/* <input className='form__input' type="text" id="lang" name="student_lang"></input> */}
                        <textarea className='form__input form__input-textarea' placeholder="Введите предметные области" required value={predmObl}
                            onChange={(e) => setPredmObl(e.target.value)}></textarea>

                        <label className='form__label' for="lang">Ключевые слова (минимум 6)*</label>
                        <input className='form__input' required type="text" id="lang" name="student_lang" value={keyWord}
                            onChange={(e) => setKeyWord(e.target.value)}></input>

                        <label className='form__label form__label-index' for="lang">Индексация журнала</label>
                        <select multiple id="index" name="index">
                            <option className='form__input form__input-radio' value="index-1">Индекс 1</option>
                            <option className='form__input form__input-radio' value="index-2">Индекс 2</option>
                            <option className='form__input form__input-radio' value="index-3">Индекс 3</option>
                            <option className='form__input form__input-radio' value="index-1">Индекс 4</option>
                            <option className='form__input form__input-radio' value="index-2">Индекс 5</option>
                            <option className='form__input form__input-radio' value="index-3">Индекс 6</option>
                            <option className='form__input form__input-radio' value="index-1">Индекс 7</option>
                            <option className='form__input form__input-radio' value="index-2">Индекс 8</option>
                            <option className='form__input form__input-radio' value="index-3">Индекс 9</option>
                        </select>

                        <label className='form__label' for="lang">Квартиль журнала, иные дополнительные требования и комментарии по индексации</label>
                        {/* <input className='form__input' type="text" id="lang" name="student_lang"></input> */}
                        <textarea className='form__input form__input-textarea' placeholder="Введите текст"></textarea>


                        <label className='form__label' for="lang">Существует ли жесткий дедлайн (срок, не позднее которого необходимо опубликовать статью)</label>
                        <input className='form__input' type="text" id="lang" name="student_lang"></input>

                        <label className='form__label' for="lang">Написана ли статья в рамках гранта/государственного задания? Если да, укажите ссылку на интернет-страниц с условиями</label>
                        {/* <input className='form__input' type="text" id="lang" name="student_lang"></input> */}
                        <textarea className='form__input form__input-textarea' placeholder="Введите текст"></textarea>

                        {/* <button type="submit" className="form__button" onClick={() => navigate('/status')}>Отправить</button> */}
                        {/* <NavLink exact to="/status" activeClassName="menu__link_active" className="menu__link">Отправить</NavLink> */}
                        <button type="submit" className="form__button" >Отправить</button>


                        {/* <Routes>
                        <Route path="/status">
                            <Status />
                        </Route>
                    </Routes> */}

                    </form>
                </div>
            </div>
        </div >
    )

}

export default Content;
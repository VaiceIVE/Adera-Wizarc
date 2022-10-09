import React from 'react';
import classnames from 'classnames';

import * as calendar from './calendar';
import '../../css/style.css';

import arrowl from '../../image/content/calendar/arrow-left.svg';
import arrowr from '../../image/content/calendar/arrow-right.svg';

export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2022],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        
        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = (date) => {
        this.setState({ selectedDate: date });
        console.log(date);
        this.props.onChange(date);
        this.Seler();
    };

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar">
                <header className='calendar__row'>
                    <div className='calendar__name'
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames[this.month]}
                    </div>
                    <div className='calendar__btns'>
                        <button onClick={this.handlePrevMonthButtonClick}><img src={arrowl}></img></button>
                        <button onClick={this.handleNextMonthButtonClick}><img src={arrowr}></img></button>
                    </div>
                </header>

                <div>
                    <thead>
                        <tr className='calendar__days-name'>
                            {weekDayNames.map(name =>
                                <th className='calendar__day-name' key={name}>{name}</th>
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                        key={index}
                                        className={classnames('calendar__day', {
                                            'today': calendar.areEqual(date, currentDate),
                                            'selected': calendar.areEqual(date, selectedDate)
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} />
                                )}
                            </tr> 
                        )}
                    </tbody>
                </div>
            </div>
        );
    }
}
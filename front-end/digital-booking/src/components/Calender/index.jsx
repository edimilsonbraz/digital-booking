//imports do Calendario
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import br from 'date-fns/locale/pt-BR'
registerLocale('br', br)

import style from './style.module.css'
import { useState } from 'react'

export function Calender() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const onChangeDates = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

  }
  
  console.log("Check-in => " + startDate)
  console.log("Check-out => " + endDate)

  return (
    <div className={style.contentCalender}>
      <DatePicker
        className={style.reactDatepicker__monthContainer}
        selected={startDate}
        onChange={onChangeDates}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
        inline
        locale="br"
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
      />
    </div>
  )
}

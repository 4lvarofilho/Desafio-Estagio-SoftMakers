'use client'

import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import {ptBR} from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pt-BR', ptBR)

interface DateInputProps {
  value: Date | null
  onChange: (date: Date | null) => void
}

export function DateInput({ value, onChange }: DateInputProps) {
  return (
    <div className="relative w-full">
      <DatePicker
        selected={value}
        onChange={onChange}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        className="h-10 bg-transparent w-full rounded-md outline-none border-4 border-grey placeholder:text-grey 
          py-3 pl-2 pr-4 focus:text-white text-white"
        placeholderText="DD/MM/AAAA"
      />
    </div>
  )
}

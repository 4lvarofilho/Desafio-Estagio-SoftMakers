'use client'

import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import {ptBR} from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pt-BR', ptBR)

interface DateInputProps {
  value: Date | null
  onChange: (date: Date | null) => void
  styling: string;
  disabled?: boolean;
}

export function DateInput({ value, onChange, styling, disabled }: DateInputProps) {
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
        className={styling}
        placeholderText="DD/MM/AAAA"
        disabled={disabled}
      />
    </div>
  )
}

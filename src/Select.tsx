import { useState } from 'react';
import styles from './select.module.css'

type TSelectOption = {
    label: string;
    value: string | number;
}

type TSelectProps = {
    options: TSelectOption[]
    value: TSelectOption;
    onChange: (value: TSelectOption) => void
}

export function Select ({ options, value, onChange } : TSelectProps) {
    const [isOpen, setIsopen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const handleSelectOption = (option: TSelectOption) => {
        if (option !== value) onChange(option)
    }

    function isOptionSelected(option: TSelectOption) {
        return option === value;
      }

    const handleSelectedAndHighlighted = (option : TSelectOption, index : number) => {
        return `${styles.option} ${isOptionSelected(option) ? styles.selected : '' } ${index === highlightedIndex ? styles.highlighted : ""}`
    }
    return (
        <div 
            className={styles.container}
            onClick={() => setIsopen(prev => !prev)}
        >
            <span className={styles.value}>{value.label}</span>
            <button className={styles['clear-btn']}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ? styles['options-show'] : ''}`}>
                {options.map((option: TSelectOption, index: number) => (
                    <li 
                        key={option.value} 
                        onMouseEnter={() => setHighlightedIndex(index)}
                        className={handleSelectedAndHighlighted(option, index)}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleSelectOption(option)
                            setIsopen(false)
                        }}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}
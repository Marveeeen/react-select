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
    return (
        <div className={styles.container}>
            <span className={styles.value}>{value.label}</span>
            <button className={styles['clear-btn']}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={styles.options}>
                {options.map(option => (
                    <li key={option.value} className={styles.option}>{option.label}</li>
                ))}
            </ul>
        </div>
    )
}
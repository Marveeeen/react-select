import { useEffect, useState } from "react";
import styles from "./select.module.css";

type TSelectOption = {
  label: string;
  value: string | number;
};

type TMultipleSelectProps = {
  multiple: true;
  value: TSelectOption[];
  onChange: (value: TSelectOption[]) => void;
};

type TSingleSelectProps = {
  multiple?: false;
  value?: TSelectOption;
  onChange: (value: TSelectOption | undefined) => void;
};

type TSelectProps = {
  options: TSelectOption[];
} & (TSingleSelectProps | TMultipleSelectProps);

export function Select({ multiple, options, value, onChange }: TSelectProps) {
  const [isOpen, setIsopen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  const handleSelectOption = (option: TSelectOption) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };

  function isOptionSelected(option: TSelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  const handleSelectedAndHighlighted = (
    option: TSelectOption,
    index: number
  ) => {
    return `${styles.option} ${
      isOptionSelected(option) ? styles.selected : ""
    } ${index === highlightedIndex ? styles.highlighted : ""}`;
  };

  const renderValue = () => {
    if (!multiple) return value?.label;
    return value?.map((v) => (
      <button
        key={v.value}
        onClick={(e) => {
          e.stopPropagation();
          handleSelectOption(v);
        }}
        className={styles["option-badge"]}
      >
        {v.label}
        <span className={styles["remove-btn"]}>&times;</span>
      </button>
    ));
  };

  return (
    <div
      tabIndex={1}
      className={styles.container}
      onBlur={() => setIsopen(false)}
      onClick={() => setIsopen((prev) => !prev)}
    >
      <span className={styles.value}>{renderValue()}</span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul
        className={`${styles.options} ${isOpen ? styles["options-show"] : ""}`}
      >
        {options.map((option: TSelectOption, index: number) => (
          <li
            key={option.value}
            onMouseEnter={() => setHighlightedIndex(index)}
            className={handleSelectedAndHighlighted(option, index)}
            onClick={(e) => {
              e.stopPropagation();
              handleSelectOption(option);
              setIsopen(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

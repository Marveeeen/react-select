export type TSelectOption = {
  label: string;
  value: string | number;
};

export type TMultipleSelectProps = {
  multiple: true;
  value: TSelectOption[];
  onChange: (value: TSelectOption[]) => void;
};

export type TSingleSelectProps = {
  multiple?: false;
  value?: TSelectOption;
  onChange: (value: TSelectOption | undefined) => void;
};

export type TSelectProps = {
  options: TSelectOption[];
} & (TSingleSelectProps | TMultipleSelectProps);

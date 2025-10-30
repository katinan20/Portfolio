/*
interface InputProps {
  id: string;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  containerClassName?: string;
  className?: string;
  name?: string;
  value?: string;
  type?: string;
  onBlur?: () => void;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  restProps?: any;
  error?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const StyledInput = styled(InputText)(({}) =>
    styledInputMixin());

const AltInputRealValue = forwardRef((props: InputProps, ref?: any) => {
  const {
    id,
    label,
    description,
    required,
    containerClassName,
    className,
    error,
    before, after,
    onChange,
    handleChange,
    type,
    value,
    ...rest
  } = props;


  return (
      <div className={`flex flex-col gap-2 ${containerClassName} ${className}`} ref={ref}>
        <AtlInputLabel id={id} label={label} required={required}/>
        <div className="p-inputgroup">
          {before}
          <StyledInput id={id} aria-describedby={`${id}-help`}
                       className={`p-inputtext-sm ${error && 'p-invalid'} `}
                       required={required} onChange={(e) => {
            onChange && onChange(e),
            handleChange && handleChange(e)
          }}
                       value={value}
                       {...rest} />
          {after}
        </div>

        {description && <small id={`${id}-help`}>{description}</small>}
        {error && <small className={'text-red-500'}>{error}</small>}
      </div>
  );
});

export default AltInputRealValue;
*/

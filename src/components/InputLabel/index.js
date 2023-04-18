import { InputLabelContainer } from './styles';

function InputLabel({ value, id, onChange, placeholder, labelText }) {
  return (
    <InputLabelContainer>
      <label htmlFor={id}>{labelText}</label>
      <input value={value} id={id} onChange={onChange} placeholder={placeholder} />
    </InputLabelContainer>
  )
}

export { InputLabel }
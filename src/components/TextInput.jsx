import PropTypes from "prop-types"

TextInput.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    label: PropTypes.string,
}

export default function TextInput({label, value, setValue}) {
    return (
        <div>
            <label htmlFor="title">{label}</label>
            <input 
                type="text"
                name={label}
                id={label}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
      </div>
    )
}
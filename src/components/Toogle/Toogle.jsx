import toogleStyle from './Toogle.module.css';

const Toogle = ({ handleChange, isChecked, type }) => {
    return (
        <div className={toogleStyle.toggleContainer}>
            <input
                type="checkbox"
                id={`checkbox-${type}`}
                className={toogleStyle.toggle}
                onChange={handleChange}
                checked={isChecked}
            />
            <label className={toogleStyle.toggleLabel} htmlFor={`checkbox-${type}`}>
                <span className={toogleStyle.today}>Oggi</span>
                <span className={toogleStyle.week}>Settimana</span>
            </label>
        </div>
    )
}

export default Toogle;
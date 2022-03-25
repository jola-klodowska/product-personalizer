import styles from './OptionColor.module.scss'
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {

    const perpareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(color =>
                    <li key={color}>
                        <button type="button" value={color} onClick={props.onColorChange} className={clsx(perpareColorClassName(color), props.currentColor === color && styles.active)} />
                    </li>)}
            </ul>
        </div>
    );
}

OptionColor.propTypes = {
    colors: PropTypes.array.isRequired,
    onColorChange: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired
};

export default OptionColor;
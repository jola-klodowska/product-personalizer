import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(size =>
                    <li key={size.name}>
                        <button type="button" value={size.name} onClick={props.onSizeChange} className={clsx(props.currentSize === size.name && styles.active)}>{size.name}</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

OptionSize.propTypes = {
    sizes: PropTypes.array.isRequired,
    onSizeChange: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired
}

export default OptionSize;
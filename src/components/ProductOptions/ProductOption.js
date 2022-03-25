import styles from './ProductOption.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOption = props => {
    return (
        <form>
            <OptionSize
                sizes={props.sizes}
                onSizeChange={props.onSizeChange}
                currentSize={props.currentSize}
            />
            <OptionColor
                colors={props.colors}
                onColorChange={props.onColorChange}
                currentColor={props.currentColor}
            />
            <Button onClick={props.onOrderSend} className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
}

ProductOption.propTypes = {
    sizes: PropTypes.array.isRequired,
    onSizeChange: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    onColorChange: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    onOrderSend: PropTypes.func.isRequired
};

export default ProductOption;
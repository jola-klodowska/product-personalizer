import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOption from '../ProductOptions/ProductOption';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const changeSize = e => {
    e.preventDefault();
    setCurrentSize(e.target.value);
  };

  const changeColor = e => {
    e.preventDefault();
    setCurrentColor(e.target.value);
  };

  const getPrice = () => {
    const calculatedPrice = props.basePrice + checkPrice;
    return calculatedPrice;
  };

  const checkPrice = useMemo(() => {
    for (const size of props.sizes) {
      if (currentSize === size.name) {
        return size.additionalPrice;
      };
    };
  }, [currentSize, props.sizes]);

  const sendOrder = e => {
    e.preventDefault();
    console.log('SUMMARY');
    console.log('==========');
    console.log('Name: ' + props.title);
    console.log('Price: ' + getPrice());
    console.log('Size: ' + currentSize);
    console.log('Color: ' + currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        currentColor={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOption
          onOrderSend={sendOrder}
          sizes={props.sizes}
          onSizeChange={changeSize}
          currentSize={currentSize}
          colors={props.colors}
          onColorChange={changeColor}
          currentColor={currentColor}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;
import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button/Button';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const perpareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const changeSize = e => {
    e.preventDefault();
    setCurrentSize(e.target.value);
  };

  const changeColor = e => {
    e.preventDefault();
    setCurrentColor(e.target.value);
  };

  const getPrice = e => {
    const calculatedPrice = props.basePrice + checkPrice();
    return calculatedPrice;
  };

  const checkPrice = () => {
    for (const size of props.sizes) {
      if (currentSize === size.name) {
        return size.additionalPrice;
      };
    };
  };

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
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt={props.title}
            src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
        </div>
        <div>
          <header>
            <h2 className={styles.name}>{props.title}</h2>
            <span className={styles.price}>Price: {getPrice()}$</span>
          </header>
          <form>
            <div className={styles.sizes}>
              <h3 className={styles.optionLabel}>Sizes</h3>
              <ul className={styles.choices}>
                {props.sizes.map(size =>
                  <li key={size.id}>
                    <button type="button" value={size.name} onClick={changeSize} className={currentSize === size.name && styles.active}>{size.name}</button>
                  </li>
                )}
              </ul>
            </div>
            <div className={styles.colors}>
              <h3 className={styles.optionLabel}>Colors</h3>
              <ul className={styles.choices}>
                {props.colors.map(color =>
                  <li key={color.id}>
                    <button type="button" value={color} onClick={changeColor} className={clsx(perpareColorClassName(color), currentColor === color && styles.active)} />
                  </li>)}
              </ul>
            </div>
            <Button onClick={sendOrder} className={styles.button}>
              <span className="fa fa-shopping-cart" />
            </Button>
          </form>
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
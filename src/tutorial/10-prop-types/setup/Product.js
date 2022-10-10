import React from 'react';
import PropTypes from 'prop-types'; // importing prop-types
import defaultImage from '../../../assets/default-image.jpeg'; // importing a static image from the src/assets folder

const Product = ({name, image, price}) => {
  return <article className='product'>
    {/* <img src={image.url} alt={name} />
    <h4>{name}</h4>
    <p>${price}</p>  */}

    {/* IMPORTANT */}
    {/* Use this if you are using default prop. Else, use the lines above. Notice how the image is short-circuited. Its to check if image variable
    exists AND url inside image also exists. Failing any of the 2 conditions will throw error so you need to check both.*/}
    <img src={(image && image.url) || defaultImage} alt={name || 'Default Name'} />
    <h4>{name || 'Default Name'}</h4>
    <p>${price || 3.99}</p>
  </article>;
};

// setting up a PropTypes property on the component to prevent inconsistent data/response. You can from that point onward either you can either use
// short circuit operator, or set default value for missing props
Product.propTypes = {
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  image:PropTypes.object.isRequired
}

// setting up default props. This also showcases how you can import a static image and use it as default prop as well as how to set it as nested value
// i.e image->url = imagepath
// Product.defaultProps = {
//   name: 'Default Name',
//   price: 3.99,
//   image: {
//     url: defaultImage
//   }
// }

export default Product;
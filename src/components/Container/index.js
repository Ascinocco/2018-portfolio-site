import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.css';

const propTypes = {
  containerClassName: PropTypes.string,
  children: PropTypes.element.isRequired,
};

const defaultProps = {
  containerClassName: null,
};

const Container = ({ children, containerClassName }) => (
  <section className={cx(styles.container, containerClassName)}>
    {children}
  </section>
);

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;


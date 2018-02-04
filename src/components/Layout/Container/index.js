import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'semantic-ui-react';
import './Container.css';

const propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: null,
  fluid: true,
};

const PortfolioContainer = ({ children, className, fluid }) => (
  <Container
    className={cx('portfolio--container', className)}
    fluid={fluid}
  >
    {children}
  </Container>
);

PortfolioContainer.propTypes = propTypes;
PortfolioContainer.defaultProps = defaultProps;

export default PortfolioContainer;

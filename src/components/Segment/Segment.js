import React from "react";
import { PropTypes } from "prop-types";

import styles from "./Segment.module.scss";

/**
 * Segment Component
 */

export default class Segment extends React.Component {
  //
  render() {
    //console.log(this.props)
    const { createdBy } = this.props;
    let cn = styles.block;
    if (this.props.className) cn = cn + " " + this.props.className;
    let name = "";
    if (createdBy) {
      name = <h3>Created By: {createdBy}</h3>;
    }
    return (
      <div className={cn}>
        {name}
        {this.props.children}
      </div>
    );
  }
}

Segment.propTypes = {
  children: PropTypes.array.isRequired,
};

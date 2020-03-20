import React from "react";
import compose from "../../utils/compose";
import {connect} from "react-redux";
import Header from "../../components/header";

const HeaderContainer = ({orderTotal}) => {
  return (
      <Header totalCost={orderTotal}/>
  )
};

const mapStateToProps = ({orderTotal}) => {
  return {
      orderTotal
  }
};

export default compose(
    connect(mapStateToProps)
)(HeaderContainer)


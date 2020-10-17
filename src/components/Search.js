import React from "react";
import { connect } from "react-redux";
import { filterChange } from "../reducers/filterReducer";
import { Input } from 'semantic-ui-react'

const Search = props => {
  const handleChange = event => {
    props.filterChange(event.target.value);
  }

  return (
    <Input
      style={{ paddingTop: "20px" }}
      placeholder='Search'
      onChange={handleChange}
      value={props.filter}/>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  filterChange,
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Search);
export default ConnectedFilter
import React, { Component } from "react";
import { Links } from "./Data";
import { projects } from "./Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    // closeLinks: false,
    links: Links,
    // headerShow:false,
    devSkills: false,
    projects: projects
    // backMode: false,
    // setClass: JSON.parse(localStorage.getItem("Mode"))
  };
  handleSideBar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };
  handleClose = () => {
    if (this.state.sidebarOpen === true) {
      this.setState({
        sidebarOpen: false
      });
    }
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSideBar: this.handleSideBar,
          handleClose: this.handleClose
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadImages, setImages, errorImages } from "../../actions/index";
import Button from "../ButtonComponent/ButtonComponent";
import "./ImagesComponent.scss";

class ImagesComponent extends Component {
  static propTypes = {
    photos: PropTypes.array
  };
  componentDidMount() {
    this.loadImages();
  }
  loadImages = () => {
    this.props.loadImages();
  };

  render() {
    console.log(this.props.photos);
    const { photos, isLoading } = this.props;
    return (
      <div className="images">
        <section className="grid">
          {photos.map((item, index) => {
            return (
              <img src={item.urls.small} key={item.id} alt={item.description} />
            );
          })}
        </section>
        <Button
          title={"More photo"}
          cbFunction={this.loadImages}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  photos: store.photos,
  isLoading: store.isLoading
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages()),
  setImages: imgs => dispatch(setImages(imgs)),
  errorImages: error => dispatch(errorImages(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesComponent);

import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://image.freepik.com/photos-gratuite/portrait-deux-amies-effrayees-regardant-television_23-2147894393.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src:
      "https://image.freepik.com/photos-gratuite/vue-face-femme-lunettes-3d-couvrant-son-visage-seau-pop-corn_23-2148457909.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src:
      "https://image.freepik.com/photos-gratuite/boites-mais-eclate-frontiere-du-mais-souffle_23-2147698927.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
];

const Carous = () => <UncontrolledCarousel items={items} />;

export default Carous;

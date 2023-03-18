import React, { useContext } from "react";

import { StarRatingContext } from "./StarRating";

function StarRatingLabel() {
  const { rating, labelText } = useContext(StarRatingContext);

  return <div></div>;
}

export default StarRatingLabel;

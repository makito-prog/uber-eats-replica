import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

export const Foods = () => {
    const { restaurantsId } = useParams();

  return (
    <Fragment>
      フード一覧
      <p>restaurantsIdは {restaurantsId} です</p>
    </Fragment>
  )
}

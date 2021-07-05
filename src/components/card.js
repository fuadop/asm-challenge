import React from 'react';

const Card = (props) => {
  const {
    strMealThumb,
    strMeal,
    description,
    ratings,
  } = props;

  let price = props.price.substring(1) + '$';

  return (
    <div className='container-fluid shadow my-5 px-0' style={styleSheet.container}>
      <div style={styleSheet.imageContainer}>
        <img src={strMealThumb} alt='banner' style={styleSheet.bannerImage} />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <h4>{ strMeal }</h4>
          </div>
          <div className='col-4'>
            <h4>{ price }</h4>
          </div>
        </div>
        <div>
          <p>Served with french fried + drink</p>
        </div>
        <div>
          <p style={styleSheet.description} className='text-truncate'>{ description }</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <ul className='d-flex list-unstyled my-4 mx-5'>
            {(new Array(ratings).fill(0)).map(() => (
              <li style={styleSheet.starPadding}>
                <i className='ri-star-fill ri-1x' style={styleSheet.filledStar}></i>
              </li>
            ))}
            {(new Array(5 - ratings).fill(0)).map(() => (
              <li style={styleSheet.starPadding}>
                <i className='ri-star-line ri-1x' style={styleSheet.unFilledStar}></i>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-4 d-flex' style={styleSheet.plusButton}>
          <i className='ri-add-fill ri-4x'></i>
        </div>
      </div>
    </div>
  );
};

const styleSheet = {
  container: {
    borderTopRightRadius: '30px',
    borderBottomLeftRadius: '30px',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  plusButton: {
    borderTopLeftRadius: '30px',
    backgroundColor: 'orange',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledStar: {
    color: 'orange',
  },
  unFilledStar: {
    color: 'orange',
  },
  starPadding: {
    marginTop: '13px',
    margin: '0 5px',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  },
  imageContainer: {
    width: '100%',
    height: '300px',
    padding: '0',
    margin: '0',
    borderBottomLeftRadius: '30px',
    overflow: 'hidden',
    marginBottom: '1rem',
  },
  description: {
    textOverflow: 'ellipsis',
    // maxHeight: '4rem',
    lineHeight: '.9rem',
  }
};

export default Card;

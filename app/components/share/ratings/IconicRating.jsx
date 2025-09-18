import Image from 'next/image'
import { useId } from 'react';

const Stars = ({ starNumber }) => {
  const uniqueId = useId(); // React 18+ hook to generate a unique ID

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <input
        key={i}
        type="radio"
        name={`rating-${uniqueId}`}  // unique name per component instance
        className="mask mask-star-2 bg-orange-300"
        aria-label={`${i} star`}
        defaultChecked={i === starNumber}
        readOnly
      />
    );
  }

  return <div className="rating">{stars}</div>;
};

function IconicRating({ ImageSrc, title, description, starNumber, imageAlt = "rating" }) {

  return (
    <div className="card w-fit card-xs">

      <div className="card-body text-left">

        <div className="card-title">

          <div className='bg-base-100 p-4 rounded-xl drop-shadow-md'>
            <Image src={ImageSrc} alt={imageAlt} width={50} />
          </div>
          <div className='w-full'>
            <div className='flex w-full gap-3 items-center'>
              <h1 className='font-bold text-xl'>{title}</h1>
              <Stars starNumber={starNumber} />
            </div>
            <p className='capitalize font-light text-lg'>{description}</p>
          </div>
        </div>
      </div>
    </div >


  )
}
export { IconicRating, Stars } 

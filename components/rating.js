import { StarIcon } from "@heroicons/react/24/solid";

const Rating = ({ rating }) => {
  const r = Math.round(rating);

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-row py-2">
      {stars.map((item, i) =>
        i < r ? (
          <StarIcon key={i} className="h-6 w-6 text-yellow-500" />
        ) : (
          <StarIcon key={i} className="h-6 w-6 " />
        )
      )}
    </div>
  );
};

export default Rating;

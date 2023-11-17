function ReviewItem() {
  return (
    <div className="flex h-[5%]">
      <img
        src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg"
        alt="アイコン"
        className="w-1/6"
      />
      <p className="w-4/6">まあまあうまい</p>
      <div className="goodbad w-2/6 flex">
        <img
          src="https://www.svgrepo.com/show/513857/thumbs-up.svg"
          alt=""
          className="object-cover w-1/2"
        />
        <img
          src="https://www.svgrepo.com/show/513858/thumbs-down.svg"
          alt=""
          className="object-cover w-1/2"
        />
      </div>
    </div>
  );
}

export default ReviewItem;

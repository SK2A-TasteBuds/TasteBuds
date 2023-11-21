import Image from "next/image";
import { getReviewsWithNoImages } from "@/utils/reviews";

function ReviewItem(props: any) {
  console.log(props);
  const { user_name, create_at, comment, user_img, like } = props;
  return (
    <div className='p-2 text-base rounded-lg max-w-md md:max-w-2xl w-full'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center '>
          <p className='inline-flex items-center mr-3 text-sm text-gray-900  font-semibold'>
            <Image
              width={120}
              height={120}
              className='mr-2 w-6 h-6 rounded-full'
              src={user_img}
              alt={user_name}
            />
            {user_name}
          </p>
          {/* like icons */}
          <div className='flex gap-2 '>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14 9H12.75C12.75 9.69036 13.3096 10.25 14 10.25V9ZM14 5H15.25H14ZM11 2V0.75C10.506 0.75 10.0584 1.04092 9.85774 1.49233L11 2ZM7 11L5.85774 10.4923C5.7867 10.6522 5.75 10.8251 5.75 11H7ZM7 22H5.75C5.75 22.6904 6.30964 23.25 7 23.25V22ZM18.28 22L18.2941 20.75H18.28V22ZM20.28 20.3L19.0444 20.1105L19.0441 20.1126L20.28 20.3ZM21.66 11.3L22.8956 11.4895L22.8958 11.4876L21.66 11.3ZM19.66 9V10.25C19.6647 10.25 19.6694 10.25 19.6742 10.2499L19.66 9ZM7 22V23.25C7.69036 23.25 8.25 22.6904 8.25 22H7ZM7 11H8.25C8.25 10.3096 7.69036 9.75 7 9.75V11ZM15.25 9V5H12.75V9H15.25ZM15.25 5C15.25 2.65279 13.3472 0.75 11 0.75V3.25C11.9665 3.25 12.75 4.0335 12.75 5H15.25ZM9.85774 1.49233L5.85774 10.4923L8.14226 11.5077L12.1423 2.50767L9.85774 1.49233ZM5.75 11V22H8.25V11H5.75ZM7 23.25H18.28V20.75H7V23.25ZM18.2659 23.2499C19.8865 23.2682 21.2729 22.0898 21.5159 20.4874L19.0441 20.1126C18.9881 20.4824 18.6681 20.7543 18.2941 20.7501L18.2659 23.2499ZM21.5156 20.4895L22.8956 11.4895L20.4244 11.1105L19.0444 20.1105L21.5156 20.4895ZM22.8958 11.4876C23.0389 10.5448 22.7608 9.58683 22.1351 8.86729L20.2486 10.5077C20.393 10.6738 20.4572 10.8949 20.4242 11.1124L22.8958 11.4876ZM22.1351 8.86729C21.5094 8.14775 20.5993 7.73928 19.6458 7.75008L19.6742 10.2499C19.8942 10.2474 20.1042 10.3417 20.2486 10.5077L22.1351 8.86729ZM19.66 7.75H14V10.25H19.66V7.75ZM7 20.75H4V23.25H7V20.75ZM4 20.75C3.58579 20.75 3.25 20.4142 3.25 20H0.75C0.75 21.7949 2.20507 23.25 4 23.25V20.75ZM3.25 20V13H0.75V20H3.25ZM3.25 13C3.25 12.5858 3.58579 12.25 4 12.25V9.75C2.20507 9.75 0.75 11.2051 0.75 13H3.25ZM4 12.25H7V9.75H4V12.25ZM5.75 11V22H8.25V11H5.75Z'
                fill={like ? "#2AAC7A" : "#a1a1aa"} //#a1a1aa'
              />
            </svg>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 15L11 15C11 14.4477 10.5523 14 10 14L10 15ZM10 19L9 19L10 19ZM13 22L13 23C13.3952 23 13.7533 22.7673 13.9138 22.4061L13 22ZM17 13L17.9138 13.4061C17.9706 13.2783 18 13.1399 18 13L17 13ZM17 2L18 2C18 1.44772 17.5523 1 17 1L17 2ZM5.72 2L5.70869 3L5.72 3L5.72 2ZM3.72 3.7L4.70845 3.85156L4.70869 3.84994L3.72 3.7ZM2.34 12.7L1.35155 12.5484L1.35132 12.5499L2.34 12.7ZM4.34 15L4.34 13.9999L4.32868 14.0001L4.34 15ZM17 2L17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2L17 2ZM17 13L16 13C16 13.5523 16.4477 14 17 14L17 13ZM9 15L9 19L11 19L11 15L9 15ZM9 19C9 21.2091 10.7909 23 13 23L13 21C11.8954 21 11 20.1046 11 19L9 19ZM13.9138 22.4061L17.9138 13.4061L16.0862 12.5939L12.0862 21.5939L13.9138 22.4061ZM18 13L18 2L16 2L16 13L18 13ZM17 1L5.72 1L5.72 3L17 3L17 1ZM5.7313 1.00006C4.23537 0.983154 2.95561 2.07095 2.7313 3.55007L4.70869 3.84994C4.78346 3.3569 5.21005 2.9943 5.70869 2.99994L5.7313 1.00006ZM2.73155 3.54844L1.35155 12.5484L3.32845 12.8516L4.70845 3.85156L2.73155 3.54844ZM1.35132 12.5499C1.21924 13.4202 1.47598 14.3045 2.05353 14.9687L3.56275 13.6563C3.37023 13.4349 3.28465 13.1401 3.32868 12.8501L1.35132 12.5499ZM2.05353 14.9687C2.63109 15.6329 3.4712 16.0099 4.35132 15.9999L4.32868 14.0001C4.0353 14.0034 3.75527 13.8777 3.56275 13.6563L2.05353 14.9687ZM4.34 16L10 16L10 14L4.34 14L4.34 16ZM17 3L20 3L20 1L17 1L17 3ZM20 3C20.5523 3 21 3.44772 21 4L23 4C23 2.34315 21.6569 1 20 1L20 3ZM21 4L21 11L23 11L23 4L21 4ZM21 11C21 11.5523 20.5523 12 20 12L20 14C21.6569 14 23 12.6569 23 11L21 11ZM20 12L17 12L17 14L20 14L20 12ZM18 13L18 2L16 2L16 13L18 13Z'
                fill={like ? "#a1a1aa" : "#FF0F00"}
              />
            </svg>
          </div>
        </div>
      </div>
      <p className='text-gray-500 '>{comment}</p>
      <p className='text-xs text-zinc-400 flex justify-end'>
        <time dateTime={create_at.toDate().toISOString()} title={create_at.toDate().toString()}>
          {create_at.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>
    </div>
  );
}

async function Reviews({ store_id }: { store_id: string }) {
  const reviews = await getReviewsWithNoImages(store_id);
  console.log(reviews);

  const reviewsList = reviews.map((review, index) => <ReviewItem key={index} {...review} />);

  return (
    <>
      <div className='flex flex-col  items-center justify-center p-2 pb-20'>{reviewsList}</div>
    </>
  );
}

export default Reviews;

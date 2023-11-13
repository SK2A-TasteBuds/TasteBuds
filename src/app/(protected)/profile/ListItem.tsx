function ListItem(props) {
  const { imgUrl, title, desc } = props;

  return (
    <div className="max-w-xs  max-h-fit md:max-w-md rounded overflow-hidden shadow-lg border-2 ">
      <img className="w-full" src={imgUrl} alt="Sunset in the mountains" />
      <div className="px-6 py-4 bg-blue-200">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base truncate ...">{desc}</p>
      </div>
    </div>
  );
}

export default ListItem;

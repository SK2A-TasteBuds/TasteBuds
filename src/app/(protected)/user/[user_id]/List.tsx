"use client";
import ListItem from "./ListItem";
import events from "./event";
import groups from "./group";
import { useState } from "react";

function ImageList({ items }: { items: any }) {
  return (
    <div className='flex items-center justify-center'>
      <div className=' grid grid-cols-2 md:grid-cols-3 gap-2 mx-auto '>
        {items.map((item: any, index: number) => (
          <ListItem key={index} imgUrl={item.imgUrl} desc={item.desc} title={item.title} />
        ))}
      </div>
    </div>
  );
}

function List() {
  const [showList, setShowList] = useState("event");

  const handleEventBtn = () => {
    setShowList("event");
  };

  const handleGroupBtn = () => {
    setShowList("group");
  };

  return (
    <>
      <button
        className='rounded-md border border-transparent px-3 py-1.5 text-base font-semibold bg-orange-500 hover:border-indigo-600 transition duration-250 w-1/2 sticky top-28'
        onClick={handleEventBtn}
      >
        Events
      </button>
      <button
        className='rounded-md border border-transparent px-3 py-1.5 text-base font-semibold bg-orange-500 hover:border-indigo-600 transition duration-250 w-1/2 sticky top-28'
        onClick={handleGroupBtn}
      >
        Groups
      </button>
      <div className='overflow-auto max-h-max  m-4 pb-16'>
        {showList === "event" ? <ImageList items={events} /> : <ImageList items={groups} />}
      </div>
    </>
  );
}

export default List;

"use client";
import ListItem from "./ListItem";
import events from "./event";
import groups from "./group";
import { useState } from "react";

function ImageList({ items }: { items: any }) {
  return (
    <div className=" grid grid-cols-2 items-center justify-center">
      {items.map((item: any, index: number) => (
        <ListItem
          key={index}
          imgUrl={item.imgUrl}
          desc={item.desc}
          title={item.title}
          alt=""
          className="w-full max-h-fit"
        />
      ))}
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
      <div className="card">
        <button
          className="rounded-md border border-transparent px-3 py-1.5 text-base font-semibold bg-orange-500 hover:border-indigo-600 transition duration-250 w-1/2"
          onClick={handleEventBtn}
        >
          Events
        </button>
        <button
          className="rounded-md border border-transparent px-3 py-1.5 text-base font-semibold bg-orange-500 hover:border-indigo-600 transition duration-250 w-1/2"
          onClick={handleGroupBtn}
        >
          Groups
        </button>
        {showList === "event" ? (
          <ImageList items={events} />
        ) : (
          <ImageList items={groups} />
        )}
      </div>
    </>
  );
}

export default List;

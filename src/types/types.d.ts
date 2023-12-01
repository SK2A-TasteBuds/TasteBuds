import { Timestamp } from "firebase/firestore";

interface Store {
  id: string;
  name: string;
  name_kana: string;
  address: string;
  lng: number;
  lat: number;
  station: string;
  genre: {
    name: string;
    catch: string;
    code: string;
  };
  budget: {
    code: string;
    name: string;
    average: string;
  };
  open: string;
  close: string;
  catch: string;
  photo: {
    pc: {
      l: string;
    };
  };
}

type Genre = {
  genre_code: string;
  name: string;
  imgUrl: string;
};

type Coords = {
  lng: Number;
  lat: Number;
};

interface reviewData {
  comment: string;
  create_at: Timestamp;
  images: string | null;
  user_id: string;
  user_name: string;
  user_img: string;
}

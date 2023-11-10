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

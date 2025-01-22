import { User_Table } from "./blocks/User_Table";
const User_Table_Content = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-12">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <User_Table />
        </div>
      </div>
    </div>
  );
};
export { User_Table_Content };

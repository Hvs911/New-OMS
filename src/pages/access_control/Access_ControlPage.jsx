import { Fragment } from "react";
import { Container } from "@/components/container";
import {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
  ToolbarPageTitle,
} from "@/partials/toolbar";
import { AdminCreateContent } from "./admin_create/AdminCreateContent";
import { Admin_Table_Content } from "./admin_table/Admin_Table_Content";
const Access_ControlPage = () => {
  return (
    <Fragment>
      <Container>
        <div className="flex grow gap-5 lg:gap-7.5 ">
          <div className="flex flex-col items-stretch grow gap-5 lg:gap-7.5">
            <AdminCreateContent />
            <Admin_Table_Content />
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
export { Access_ControlPage };

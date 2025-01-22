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
import { useLayout } from "@/providers";
const Access_ControlPage = () => {
  const { currentLayout } = useLayout();
  return (
    <Fragment>
      {currentLayout?.name === "demo1-layout" && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                Public Profile
              </a>
              <a href="#" className="btn btn-sm btn-primary">
                Get Started
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
          <AdminCreateContent />
          <Admin_Table_Content />
        </div>
      </Container>
    </Fragment>
  );
};
export { Access_ControlPage };

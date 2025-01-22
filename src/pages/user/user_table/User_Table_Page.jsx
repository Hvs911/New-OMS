import { Fragment } from "react";
import { Container } from "@/components/container";
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from "@/partials/toolbar";
import { User_Table_Content } from ".";
import { useLayout } from "@/providers";
const User_Table_Page = () => {
  const { currentLayout } = useLayout();
  return (
    <Fragment>
      <Container>
        <User_Table_Content />
      </Container>
    </Fragment>
  );
};
export { User_Table_Page };

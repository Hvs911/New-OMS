import { Fragment } from "react";
import { Container } from "@/components/container";
import {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
  ToolbarPageTitle,
} from "@/partials/toolbar";
import { ProfileSettingsContent } from ".";
import { useLayout } from "@/providers";
const ProfileSettingsPage = () => {
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
        <ProfileSettingsContent />
      </Container>
    </Fragment>
  );
};
export { ProfileSettingsPage };

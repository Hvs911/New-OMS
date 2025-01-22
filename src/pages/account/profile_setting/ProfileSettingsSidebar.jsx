import { ScrollspyMenu } from "@/partials/menu";
const ProfileSettingsSidebar = () => {
  const items = [
    {
      title: "Authentication",
      children: [
        {
          title: "Email",
          target: "auth_email",
          active: false,
        },
        {
          title: "Password",
          target: "auth_password",
        },
        {
          title: "Two-Factor auth(2FA)",
          target: "auth_two_factor",
        },
        
      ],
    },
    {
      title: "Delete Account",
      target: "delete_account",
    },
  ];
  return <ScrollspyMenu items={items} />;
};
export { ProfileSettingsSidebar };

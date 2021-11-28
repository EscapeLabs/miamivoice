import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import React from "react";
import { iconColors, iconSizes } from "../../lib/constants";
import { useUser } from "../../lib/hooks/useUser";
import { selectedMemberAtom, slideOutPanelAtom } from "../../lib/store/ui";
import MvAvatar from "../common/MvAvatar";
import MvLoader from "./MvLoader";
import MvProfileDetail from "./MvProfileDetail";

const MvUserProfileComponent: React.FC = () => {
  const { profile } = useUser();
  console.log(profile);
  const [selectedMember, setMember] = useAtom(selectedMemberAtom);
  const setPanel = useUpdateAtom(slideOutPanelAtom);


  const onSelect = () => {
    if (profile) {
      setPanel({ show: true, component: MvProfileDetail, title: "Profile" });
      setMember(profile);
    }
  };

  return !profile ? (
    <MvLoader isPage={false} />
  ) : (
    <div className="flex-shrink-0 flex bg-white p-6">
      <button onClick={onSelect} className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <MvAvatar
            isText
            name={profile.name}
            colorInner={iconColors.avatar.inner_green}
            color={iconColors.avatar.inner_indigo}
            size={iconSizes.md}
          />
          <div className="ml-3 flex items-start flex-col">
            <p className="text-sm w-40 truncate font-medium text-gray-900">
              {profile.name}
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
              View
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MvUserProfileComponent;

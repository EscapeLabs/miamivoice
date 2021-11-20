import React from "react";

import { classNames, isCurrentLink } from "../../lib/utils";
import { useRouter } from "next/dist/client/router";
import { TNavigation, TProfile } from "../../types";
import Link from "next/link";
import MvUserProfileComponent from "./MvUserProfileComponent";
import MvLogOutBtn from "./MvLogOutBtn";
import MvClientOnly from "../common/MvClientOnly";

export const SideNavBar: React.FC<{
  navigation: TNavigation[];
  profile?: TProfile;
}> = ({ navigation, profile }) => {
  const router = useRouter();
  return (
    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gradienta">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4 mt-8 mb-8">
          <img className="h-14 w-full" src="/Mvlogo.svg" alt="Workflow" />
        </div>
        <nav
          className="mt-5 flex-1 px-2 bg-white space-y-1 bg-gradienta"
          aria-label="Sidebar"
        >
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                key={item.name}
                className={classNames(
                  isCurrentLink(router, item.href)
                    ? "bg-white border-2 b-blue text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "flex items-center place-content-center px-2 py-2 text-sm font-medium rounded-md nav-item"
                )}
              >
                <item.icon
                  className={classNames(
                    isCurrentLink(router, item.href)
                      ? "text-gray-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 ml-10 h-6 w-6 flex-none"
                  )}
                  aria-hidden="true"
                />
                <span className="flex-1 uppercase tracking-tighter font-semibold">{item.name}</span>
              </a>
            </Link>
          ))}
          <MvLogOutBtn />
        </nav>
      </div>
      <MvClientOnly>
        <MvUserProfileComponent />
      </MvClientOnly>
    </div>
  );
};

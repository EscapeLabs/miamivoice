import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { TProposal, TProposalSummary, TVoteSingle } from "../../types";
import { CardAvatars } from "./MvCardAvatars";
import Badge from "./MvBadge";
import { badgeColors } from "../../lib/constants";
const MvDashboardCardBody: React.FC<{
  proposal: TProposalSummary<TVoteSingle>;
  onSelected?: () => void;
}> = ({ proposal, onSelected }) => {
  return (
    <div className=" min-w-0">
      <div className="focus:outline-none">
        <span className="absolute inset-0" aria-hidden="true" />

        <p className="text-sm text-gray-500 line-clamp-3">{proposal.summary}</p>
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <div className="text-gray-300 text-xs p-1">
              Voters
            </div>
            <Badge
              classnames="px-3 py-1 text-xs"
              color="lightGreen"
            >
              {proposal.votes.length} votes
            </Badge>
          </div>
          <button
            onClick={onSelected}
            className="relative inline-flex items-center px-1 py-1
                rounded-full border-2 border-indigo bg-white text-sm
                font-medium text-indigo stroke-2"
          >
            <ArrowRightIcon className="h-3 w-3 heroicon-stroke-w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MvDashboardCardBody;

import { useUpdateAtom } from "jotai/utils";
import React from "react";
import { useSlideOut } from "../../lib/hooks/useSlideOut";
import { selectedProposalAtom } from "../../lib/store/ui";
import { TProposalSummary, TVoteSingle } from "../../types";
import MvDashboardCardBody from "./MvDashboardCardBody";
import { DashboardCardHeader } from "./MvDashboardCardHeader";
import { ProposalDetail } from "./MvProposalDetail";
import { dateGreaterThanNow } from "../../lib/utils";

export const DashboardCard: React.FC<{
  proposal: TProposalSummary<TVoteSingle>;
}> = ({ proposal }) => {
  const { setPanel } = useSlideOut();
  const setSelected = useUpdateAtom(selectedProposalAtom);
  const onSelected = () => {
    setSelected(proposal);
    setPanel({ show: true, component: ProposalDetail, title: proposal.title });
  };
  return (
    <div
      key={proposal.objectID}
      className={`relative rounded-lg border border-gray-300
       bg-white px-6 py-5 hover:border-gray-400
        focus-within:ring-2 focus-within:ring-offset-2 
        focus-within:ring-indigo-500 flex flex-col justify-between 
        ${dateGreaterThanNow(proposal?.expiryDate) ? "" : "box-shadow"}`}
    >
      <DashboardCardHeader proposal={proposal} />
      <MvDashboardCardBody onSelected={onSelected} proposal={proposal} />
    </div>
  );
};

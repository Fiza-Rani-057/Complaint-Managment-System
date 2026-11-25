 function RecentActivity(){
 return(
    <>
    <div className="rounded-2xl bg-[#0a0e0d] border border-white/[0.08] p-5">
  <div className="flex items-center justify-between gap-4 mb-5">
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#8be836] shrink-0">
        <rect x="3" y="4" width="18" height="3.2" rx="1.2" fill="currentColor" />
        <rect x="3" y="10.4" width="18" height="3.2" rx="1.2" fill="currentColor" />
        <rect x="3" y="16.8" width="18" height="3.2" rx="1.2" fill="currentColor" />
      </svg>
      <h2 className="text-[18px] font-semibold text-white tracking-tight">
        Recent Complaints
      </h2>
    </div>
    <button
    //   onClick={onViewAll}
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141f14] hover:bg-[#1b2b1b] border border-[#5a9626]/60 text-[#9ef249] text-[12.5px] font-medium transition-colors"
    >
      <span>View All</span>
      <span>→</span>
    </button>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse min-w-[680px]">
      <thead>
        <tr className="border-b border-white/[0.07] text-[12.5px] font-medium text-[#7f8a96]">
          <th className="py-3 px-3">#</th>
          <th className="py-3 px-3">Complaint Title</th>
          <th className="py-3 px-3">Category</th>
          <th className="py-3 px-3">Priority</th>
          <th className="py-3 px-3">Status</th>
          <th className="py-3 px-3">Date</th>
          <th className="py-3 px-3">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white/[0.06] text-[13px]">
        <tr>
          <td colSpan={7} className="py-12 text-center text-[#6b7280] text-[13px]">
            No complaints submitted yet.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </>
 )
 }
 export default RecentActivity;
export default function AdminClients() {
  return (
    <div>
      <h1 className="text-2xl font-display font-bold mb-6">Tenant Management</h1>
      <p className="text-text-2 mb-8">Configure client branding, industries, AI workflows, and CRM credentials.</p>
      <div className="bg-panel border border-border-soft rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-border-soft text-text-3 font-mono uppercase text-xs"><tr><th className="text-left p-4">Client</th><th className="text-left p-4">Industries</th><th className="text-left p-4">Status</th><th className="text-right p-4">Actions</th></tr></thead>
          <tbody>
            <tr className="border-b border-border-soft"><td className="p-4 font-medium">Smith Johnson HVAC</td><td className="p-4 text-text-2">HVAC, Plumbing</td><td className="p-4"><span className="text-success">● Active</span></td><td className="p-4 text-right text-accent">Edit</td></tr>
            <tr className="border-b border-border-soft"><td className="p-4 font-medium">IronRidge Roofing</td><td className="p-4 text-text-2">Roofing</td><td className="p-4"><span className="text-success">● Active</span></td><td className="p-4 text-right text-accent">Edit</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

import { SearchBar } from '@/components/dashboard/search-bar';
import { WorkspacePanel } from '@/components/dashboard/workspace-panel';
import { TopNav } from '@/components/layout/top-nav';

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <TopNav />
      <div className="mx-auto flex max-w-6xl flex-col px-6 py-16">
        <SearchBar />
        <WorkspacePanel />
      </div>
    </main>
  );
}

import { NotebookShell } from "@/components/notebook/NotebookShell";
import { getNotes } from "@/lib/notebook";
import { getNotebookNavigation } from "@/lib/notebook-navigation";
export default function NotebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NotebookShell categories={getNotebookNavigation(getNotes())}>
      {children}
    </NotebookShell>
  );
}

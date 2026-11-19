// A root template remounts on every navigation, so this entrance animation
// replays each time a new page opens — giving a smooth, sleek page transition.
// Opacity only (no transform/filter) so the fixed header keeps its positioning.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}

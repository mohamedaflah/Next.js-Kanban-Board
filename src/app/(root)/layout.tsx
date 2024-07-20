// "use client"
export default function HomeLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <main className="w-full h-screen flex ">
      {sidebar}
      <main className="w-full overflow-hidden">{children}</main>
    </main>
  );
}

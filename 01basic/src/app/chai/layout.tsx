


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <>
        <h1>chai layout</h1>
        {children}
        </>
    
  );
}

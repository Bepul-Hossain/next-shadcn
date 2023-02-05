import { SiteHeader } from "@/components/site-header"

interface LayoutProps {
  children: React.ReactNode
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export function Layout({ children, query, setQuery }: LayoutProps) {
  return (
    <>
      <SiteHeader query={query} setQuery={setQuery}/>
      <main>{children}</main>
    </>
  )
}

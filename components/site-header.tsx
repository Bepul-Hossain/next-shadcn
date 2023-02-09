import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import Search from "./search"

interface propsType {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export function SiteHeader({ query, setQuery }: propsType) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="site-header container h-12">
        <div>
          <MainNav />
        </div>
        <div>
          <Search query={query} setQuery={setQuery} />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

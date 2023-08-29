
import './layout.css'
import { PageWrapper } from "./Context/PageContext"
import Nav from './Components/Navigation/Nav'





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body>
        <main>
          <PageWrapper>
          <Nav/>
          {children}
          </PageWrapper>
        </main>
      </body>
    </html>
  )
}

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          춤추는 고양이 <span aria-hidden="true">🐾</span>
        </h1>
        <p>마음에 드는 춤을 골라 보세요</p>
      </header>
      <main className="main">{children}</main>
    </div>
  )
}

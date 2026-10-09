export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1168px] flex-col justify-between gap-5 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:px-6">
        <p>© 2026 Zhassyn Yegnay</p>
        <p className="hidden md:block">Built with curiosity. Always a work in progress.</p>
        <div className="flex gap-5">
          <a href="https://github.com/zhaynegg" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
          <a href="https://www.linkedin.com/in/zhassyn/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href="mailto:zhasynea@gmail.com" className="hover:text-accent">Email</a>
        </div>
      </div>
    </footer>
  );
}

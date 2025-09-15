export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-12">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-700">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Tahalka TVS • Begusarai ka trusted TVS partner.</p>
          <p className="text-xs">Disclaimer: This is an independent dealer website. TVS trademarks belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}

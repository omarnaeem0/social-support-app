import useLocalisation from "src/hooks/useLocalisation";

const SummarySidebar = () => {
  const { t } = useLocalisation();
  return (
    <aside className="space-y-4 rounded-3xl bg-gradient-to-br from-brand-navy via-brand-blue to-brand-sky p-6 text-white shadow-lg ring-1 ring-brand-navy">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-[#063660] shadow">
          AI
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-[#e7eff9]">
            {t("sidebarAssistLabel")}
          </p>
          <p className="text-lg font-semibold">{t("sidebarAssistTitle")}</p>
        </div>
      </div>
      <p className="text-sm text-[#f0f5fb]">{t("sidebarAssistBody")}</p>
      <div className="rounded-2xl bg-white/10 p-4 text-sm text-[#f0f5fb] ring-1 ring-white/20">
        <p className="font-semibold text-white">{t("sidebarMockTitle")}</p>
        <p className="mt-2">{t("sidebarMockBody")}</p>
      </div>
    </aside>
  );
};

export default SummarySidebar;

import { useEffect, useState } from "react";
import Button from "src/components/Button";
import useLocalisation from "src/hooks/useLocalisation";
import useAiStore from "src/hooks/useAiStore";

const AIModal = ({ setValue }) => {
  const { t, dir } = useLocalisation();
  const { aiState, updateAiState } = useAiStore();
  const [draft, setDraft] = useState(aiState.suggestion);

  useEffect(() => {
    setDraft(aiState.suggestion);
  }, [aiState.suggestion]);

  const closeModal = () => {
    updateAiState({ open: false });
  };

  const applySuggestion = () => {
    if (!aiState.field || !draft) {
      closeModal();
      return;
    }
    setValue(aiState.field, draft, { shouldValidate: true, shouldDirty: true });
    closeModal();
  };

  if (!aiState.open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/60 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-brand-light"
        dir={dir}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              {t("aiModalTitle")}
            </p>
            <h3 className="mt-1 text-xl font-bold text-brand-navy">
              {t(aiState.fieldLabelKey ?? "") || ""}
            </h3>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={closeModal}
            className="px-3 py-1 text-sm"
            aria-label="Close suggestion dialog"
          >
            ✕
          </Button>
        </div>

        <div className="mt-4 space-y-3">
          {aiState.loading ? (
            <div className="flex items-center gap-2 rounded-xl bg-brand-light px-4 py-3 text-brand-navy">
              <span className="h-3 w-3 animate-pulse rounded-full bg-brand-blue" />
              <p className="text-sm font-semibold">{t("aiGenerating")}</p>
            </div>
          ) : aiState.error ? (
            <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {aiState.error}
            </div>
          ) : (
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={6}
              className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-navy shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky"
            />
          )}
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <Button variant="secondary" onClick={closeModal}>
            {t("discard")}
          </Button>
          <Button
            variant="primary"
            disabled={aiState.loading || !!aiState.error || !draft}
            onClick={applySuggestion}
          >
            {aiState.loading ? t("aiGenerating") : t("accept")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIModal;

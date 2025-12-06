import useLocalisation from "src/hooks/useLocalisation";

const FieldError = ({ message }) => {
  const { t } = useLocalisation();
  return message ? (
    <p className="text-sm text-rose-600" role="alert">
      {t(message) || message}
    </p>
  ) : null;
};

export default FieldError;

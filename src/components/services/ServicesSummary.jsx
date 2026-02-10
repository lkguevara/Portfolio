import { motion } from "framer-motion";

const ServicesSummary = ({
  isComplete,
  projectTypeLabel,
  totalSections,
  includedSections,
  extraSections,
  stackLabel,
  functionsLabelText,
  email,
  deliverables,
  isSubmitDisabled,
  status,
  errorMessage,
  missingItems,
  onReset,
}) => {
  if (!isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 flex flex-col justify-between"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2">Resumen</p>
          <p className="text-2xl md:text-3xl font-black text-white mb-3">
            Completa el formulario
          </p>
          <p className="text-sm text-white/70">
            Cuando selecciones todo, aqui aparecera el resumen y podras enviar la cotizacion.
          </p>
          {missingItems.length > 0 && (
            <div className="mt-6 grid gap-2 text-sm text-white/70">
              {missingItems.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all"
          >
            Reiniciar
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-3xl border border-orange/30 bg-linear-to-br from-orange/10 via-purple/10 to-transparent flex flex-col justify-between"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2">Resumen</p>
        <p className="text-2xl md:text-3xl font-black text-orange mb-3">
          Te enviaremos la cotizacion
        </p>
        <p className="text-sm text-white/70">
          El rango estimado se envia a tu correo, no se muestra en pantalla.
        </p>

        <div className="mt-6 space-y-2 text-sm text-white/70">
          <p>
            <span className="text-white">Tipo:</span> {projectTypeLabel}
          </p>
          <p>
            <span className="text-white">Secciones:</span> {totalSections} ({includedSections} incluidas + {extraSections} adicionales)
          </p>
          <p>
            <span className="text-white">Stack:</span> {stackLabel}
          </p>
          <p>
            <span className="text-white">Funciones:</span> {functionsLabelText}
          </p>
          <p>
            <span className="text-white">Destino:</span> {email}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Incluye</p>
          <div className="grid gap-2 text-xs text-white/70">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold transition-all ${
            isSubmitDisabled
              ? "bg-white/10 text-white/40 cursor-not-allowed"
              : "bg-orange text-white hover:bg-orange/80"
          }`}
        >
          {status === "sending" ? "Enviando..." : "Enviar cotizacion"}
        </button>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all"
        >
          Reiniciar
        </button>
        {errorMessage && (
          <p className="text-xs text-red-300">
            {errorMessage}
          </p>
        )}
        {status === "sent" && !errorMessage && (
          <p className="text-xs text-emerald-300">
            Listo. Revisa tu correo para ver la cotizacion.
          </p>
        )}
        <p className="text-xs text-white/50">
          Esta es una estimacion inicial. Ajustamos detalles cuando definamos el alcance real.
        </p>
      </div>
    </motion.div>
  );
};

export default ServicesSummary;

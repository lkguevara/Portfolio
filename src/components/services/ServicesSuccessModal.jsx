const ServicesSuccessModal = ({ open, onClose, onReset }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl border border-orange/30 bg-[#15131c] p-6 text-center shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/20">
          <span className="text-2xl text-orange">✓</span>
        </div>
        <h4 className="text-2xl font-bold text-white mb-2">Cotizacion enviada</h4>
        <p className="text-sm text-white/70 mb-6">
          Todo ok. Revisa tu correo para ver el estimado.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-2xl border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all"
          >
            Cerrar
          </button>
          <button
            type="button"
            onClick={onReset}
            className="px-5 py-3 rounded-2xl bg-orange text-white font-bold hover:bg-orange/80 transition-all"
          >
            Nueva cotizacion
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSuccessModal;

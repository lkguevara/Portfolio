import { motion } from "framer-motion";

const ServicesForm = ({
  projectType,
  setProjectType,
  projectTypeOther,
  setProjectTypeOther,
  projectTypes,
  includedSections,
  perPage,
  extraSections,
  setExtraSections,
  totalSections,
  stackChoice,
  setStackChoice,
  stackOther,
  setStackOther,
  stackOptions,
  selectedStackDescription,
  functionOptions,
  functionSelect,
  onFunctionSelect,
  customFunctionInput,
  setCustomFunctionInput,
  onAddCustomFunction,
  selectedFunctionItems,
  customFunctions,
  onRemoveFunction,
  onRemoveCustomFunction,
  email,
  setEmail,
  formatMoney,
  currency,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-3xl border border-purple/30 bg-purple/10"
    >
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="text-2xl font-bold text-white">Cotizacion por correo</h3>
      </div>
      <p className="text-sm text-white/70 mb-6">
        Elige el tipo de proyecto, el stack y las funciones que necesitas. Te envio un rango estimado directo a tu correo.
      </p>

      <div className="space-y-5">
        <div>
          <label className="text-sm text-white/70">Tipo de proyecto</label>
          <select
            className="mt-2 w-full bg-dark border border-orange/30 rounded-xl px-4 py-3 text-white"
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
          >
            {projectTypes.map((type) => (
              <option key={type.id} value={type.id} className="bg-dark">
                {type.label}
              </option>
            ))}
          </select>
          {projectType === "other" && (
            <input
              type="text"
              value={projectTypeOther}
              onChange={(event) => setProjectTypeOther(event.target.value)}
              placeholder="Describe tu proyecto"
              className="mt-3 w-full bg-dark border border-orange/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40"
            />
          )}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-white/70">Secciones incluidas</label>
            <span className="text-xs text-orange">{includedSections}</span>
          </div>
          <p className="text-xs text-white/50 mt-1">
            Cada sección adicional: {currency} {formatMoney(perPage)}
          </p>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="text-sm text-white/70">Secciones adicionales</label>
              <span className="text-xs text-orange">{extraSections}</span>
            </div>
            <input
              type="range"
              min={0}
              max={8}
              step={1}
              value={extraSections}
              onChange={(event) => setExtraSections(Number(event.target.value))}
              className="w-full accent-orange"
            />
          </div>
          <p className="text-xs text-white/50 mt-2">
            Total estimado: {totalSections} secciones
          </p>
        </div>

        <div>
          <label className="text-sm text-white/70">Stack que necesitas</label>
          <select
            className="mt-2 w-full bg-dark border border-orange/30 rounded-xl px-4 py-3 text-white"
            value={stackChoice}
            onChange={(event) => setStackChoice(event.target.value)}
          >
            {stackOptions.map((option) => (
              <option key={option.id} value={option.id} className="bg-dark">
                {option.label}
              </option>
            ))}
          </select>
          {stackChoice === "other" ? (
            <input
              type="text"
              value={stackOther}
              onChange={(event) => setStackOther(event.target.value)}
              placeholder="Ej: Svelte, Laravel, etc."
              className="mt-3 w-full bg-dark border border-orange/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40"
            />
          ) : (
            <p className="text-xs text-white/50 mt-2">{selectedStackDescription}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-white/70">Funciones clave</label>
          <div className="mt-2 grid gap-3">
            <select
              className="w-full bg-dark border border-orange/30 rounded-xl px-4 py-3 text-white"
              value={functionSelect}
              onChange={onFunctionSelect}
            >
              <option value="" className="bg-dark">Selecciona una función</option>
              {functionOptions.map((option) => (
                <option key={option.id} value={option.id} className="bg-dark">
                  {option.label}
                </option>
              ))}
            </select>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={customFunctionInput}
                onChange={(event) => setCustomFunctionInput(event.target.value)}
                placeholder="Otra función (opcional)"
                className="flex-1 bg-dark border border-orange/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40"
              />
              <button
                type="button"
                onClick={onAddCustomFunction}
                className="px-4 py-3 rounded-xl border border-orange/40 text-white/80 hover:text-white hover:border-orange/70 transition-all"
              >
                Agregar
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedFunctionItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onRemoveFunction(item.id)}
                  className="text-xs text-white/80 bg-white/10 border border-white/10 px-3 py-1 rounded-full hover:border-orange/60"
                >
                  {item.label} · x
                </button>
              ))}
              {customFunctions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => onRemoveCustomFunction(item)}
                  className="text-xs text-white/80 bg-white/10 border border-white/10 px-3 py-1 rounded-full hover:border-orange/60"
                >
                  {item} · x
                </button>
              ))}
            </div>

            <p className="text-xs text-white/50">
              Selecciona una o varias funciones. Puedes agregar una personalizada.
            </p>
          </div>
        </div>

        <div>
          <label className="text-sm text-white/70">Correo para recibir la cotizacion</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tucorreo@ejemplo.com"
            className="mt-2 w-full bg-dark border border-orange/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40"
            required
          />
          <p className="text-xs text-white/50 mt-2">
            Sin spam. Solo te envio el estimado y la informacion del proyecto.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesForm;
